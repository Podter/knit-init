import inquirer from "inquirer";

async function ask() {
    const answer = await inquirer.prompt({
        name: "ask_serverPackages",
        type: "list",
        message: "Do you want to create ServerPackages folder?",
        choices: [
            "Yes",
            "No"
        ],
        default() {
            return "No";
        }
    })
    return answer.ask_serverPackages;
}

export default async function askServerPackages() {
    const answer = await ask();
    if (answer === "Yes") {
        return true
    } else if (answer === "No") {
        return false
    }
}
