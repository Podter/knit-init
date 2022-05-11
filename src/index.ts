#!/usr/bin/env node
import { createSpinner } from "nanospinner";
import fs from 'fs-extra'
import path from "path"
import { exec } from "child_process";

import getDir from "./functions/getDir"
import getName from "./functions/getName"
import checkDir from "./functions/checkDir";
import askServerPackages from "./functions/askServerPackages";
import { addKnitToWally, addServerPackages, setProjectName } from "./functions/changeFiles"

const templateDir = path.join(__dirname, "template")
const args = process.argv.slice(2);
const sleep = (ms = 500) => new Promise((r) => setTimeout(r, ms))

async function init() {
    const spinner = createSpinner("Creating project")
    const projectName = await getName(args)
    const projectDir = await getDir(args, projectName)
    if (await checkDir(projectDir) === true) {
        spinner.error({ text: `Directory ${projectDir} already exists.` });
        process.exit(1)
    }
    const isServerPackages = await askServerPackages()
    spinner.start()

    await sleep()
    fs.mkdirSync(projectDir)
    fs.copySync(path.join(templateDir, "default"), projectDir)
    spinner.update({ text: "Setting up" })

    await sleep()
    exec(`cd ${projectDir} && foreman install && wally init`, async (err) => {
        if (err) {
            spinner.error({ text: `Error:\n${err}\nIs foreman and wally installed?` });
            process.exit(1);
        }

        addKnitToWally(projectDir, spinner)
        
        spinner.update({ text: "Installing Knit" })
        await sleep()
        exec(`cd ${projectDir} && wally install`, async (err) => {
            if (err) {
                spinner.error({ text: `Error:\n${err}` });
                process.exit(1);
            }

            spinner.update({ text: "Finishing up" })
            await sleep()
            if (isServerPackages === true) {
                fs.copySync(path.join(templateDir, "withServerPackages", "default.project.json"), path.join(projectDir, "default.project.json"))
                addServerPackages(projectDir, spinner)
                fs.mkdirSync(path.join(projectDir, "ServerPackages"))
            }
            fs.renameSync(path.join(projectDir, "_gitignore"), path.join(projectDir, ".gitignore"))
            fs.mkdirSync(path.join(projectDir, "src", "ReplicatedStorage"))
            fs.mkdirSync(path.join(projectDir, "src", "ServerStorage"))
            setProjectName(projectDir, projectName, spinner)

        })
    })
}

init()
