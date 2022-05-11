import fs from 'fs-extra'
import path from "path"
import { replaceInFile } from 'replace-in-file';

export function addKnitToWally(projectDir: any, spinner: any) {
    fs.appendFile(path.join(projectDir, "wally.toml"), `Knit = "sleitnick/knit@^1.4"`, function (err) {
        if (err) {
            spinner.error({ text: `Error:\n${err}` });
            process.exit(1)
        }
    })
}

export function addServerPackages(projectDir: any, spinner: any) {
    fs.appendFile(path.join(projectDir, "wally.toml"), `\n[server-dependencies]`, function (err) {
        if (err) {
            spinner.error({ text: `Error:\n${err}` });
            process.exit(1)
        }
    })
}


export function setProjectName(projectDir: any, projectName: any, spinner: any) {
    const options = {
        files: [
            path.join(projectDir, "default.project.json"),
            path.join(projectDir, "wally.toml"),
            path.join(projectDir, "README.md")
        ],
        from: /my-knit-project/g,
        to: `${projectName}`
    }
    replaceInFile(options, (err) => {
        if (err) {
            spinner.error({ text: `Error:\n${err}` });
            process.exit(1);
        }

        spinner.success({ text: "Done!" });
        process.exit(0)
    })
}
