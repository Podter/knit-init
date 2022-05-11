#!/usr/bin/env node
const inquirer = require("inquirer");
const fs = require("fs")
const path = require("path")
const args = process.argv.slice(2);

let projectName
let projectDir

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function getName() {
    if (args[0]) {
        projectName = args[0]
    } else {
        const answer = await inquirer.prompt({
            name: "project_name",
            type: "input",
            message: "Project name:",
            default() {
                return "my-knit-project";
            }
        })
        projectName = answer.project_name
    }
}

async function getDir() {
    if (args[1]) {
        projectDir = args[1]
    } else {
        projectDir = path.join(__dirname, projectName)
    }
    if (fs.existsSync(projectDir)) {
        const answer = await inquirer.prompt({
            name: "overwrite_dir",
            type: "list",
            message: "Target directory already exists. Do you want to overwrite it?",
            choices: [
                "Yes",
                "No"
            ],
            default() {
                return "No";
            }
        })
        if (answer.overwrite_dir === "Yes") {
            console.log("Remove Dir and create new one")
        } else if (answer.overwrite_dir === "No") {
            process.exit(1)
        }
    } else {
        console.log("Create new dir")
    }
}

async function init(){
    await getName()
    await getDir()
    console.log(path.join(__dirname, projectName))
}

init()
