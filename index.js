#!/usr/bin/env node
// imports and args
import { createSpinner } from "nanospinner";
import fs from 'fs-extra'
import path from "path"
import { execSync } from "child_process";

import getDir from "./functions/getDir.js"
import getName from "./functions/getName.js"
import checkDir from "./functions/checkDir.js";
import setProjectName from "./functions/setProjectName.js"
import getTemplate from "./functions/getTemplate.js";

const args = process.argv.slice(2);
const sleep = (ms = 500) => new Promise((r) => setTimeout(r, ms))

// ask for project name and template
const spinner = createSpinner("Creating project")
const projectName = await getName(args)
const projectDir = await getDir(args, projectName)
if (checkDir(projectDir) === true) {
    spinner.error({ text: `Directory ${projectDir} already exists.` });
    process.exit(1)
}
const template = await getTemplate()

// start
spinner.start()
await sleep()

// git clone template
try {
    execSync(`git clone https://github.com/Podter/knit-init.git -b ${template} ${projectDir}`, { stdio: 'pipe' })
} catch (err) {
    spinner.error({ text: `Error:\n${err}\nIs git installed?` });
    process.exit(1)
}
fs.rmSync(path.join(projectDir, '.git'), { recursive: true, force: true })

// set project name and username
spinner.update({ text: "Setting up" })
await setProjectName(projectDir, projectName, spinner)
await sleep()

// foreman install
try {
    execSync(`cd ${projectDir} && foreman install`, { stdio: 'pipe' })
} catch (err) {
    spinner.error({ text: `Error:\n${err}\nIs foreman installed?` });
    process.exit(1)
}

// wally install
spinner.update({ text: "Installing Knit" })
await sleep()
try {
    execSync(`cd ${projectDir} && wally install`, { stdio: 'pipe' })
} catch (err) {
    spinner.error({ text: `Error:\n${err}\nIs wally installed?` });
    process.exit(1)
}

// some mkdirs
spinner.update({ text: "Finishing up" })
await sleep()
fs.mkdirSync(path.join(projectDir, "src", "ReplicatedStorage"))
fs.mkdirSync(path.join(projectDir, "src", "ServerStorage"))
if (template === "template-server-packages") {
    fs.mkdirSync(path.join(projectDir, "ServerPackages"))
}

// done and exit
spinner.success({ text: "Done!" });
process.exit(0)
