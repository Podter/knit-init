import fs from "fs";
import inquirer from "inquirer";

async function ask() {
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
    return answer.overwrite_dir;
}

export default async function getDir(dir: fs.PathLike) {
    if (fs.existsSync(dir)) {
        const answer = await ask();
        if (answer === "Yes") {
            console.log("Remove Dir and create new one")
        } else if (answer === "No") {
            process.exit(1)
        }
    } else {
        console.log("Create new dir")
    }
}
