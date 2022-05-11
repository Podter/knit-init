#!/usr/bin/env node
const args = process.argv.slice(2);
import getDir from "./functions/getDir"
import getName from "./functions/getName"
import checkDir from "./functions/checkDir";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

async function init() {
    const projectName = await getName(args)
    const dir = await getDir(args, projectName)
    checkDir(dir)
}

init()
