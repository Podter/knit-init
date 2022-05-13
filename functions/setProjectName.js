import path from "path"
import replaceInFile from 'replace-in-file';
import { userInfo } from "os";

async function doReplace(options, spinner) {
    await replaceInFile(options, (err) => {
        if (err) {
            spinner.error({ text: `Error:\n${err}` });
            process.exit(1);
        }
    })
}

export default async function setProjectName(projectDir, projectName, spinner) {
    const name = {
        files: [
            path.join(projectDir, "default.project.json"),
            path.join(projectDir, "wally.toml"),
            path.join(projectDir, "README.md")
        ],
        from: /my-knit-project/g,
        to: `${projectName}`
    }
    const username = {
        files: path.join(projectDir, "wally.toml"),
        from: /myName/g,
        to: `${userInfo().username.toLowerCase()}`
    }
    await doReplace(name, spinner)
    await doReplace(username, spinner)
}
