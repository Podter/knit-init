import inquirer from "inquirer";

export default async function getTemplate() {
    const answer = await inquirer.prompt({
        name: "ask_template",
        type: "list",
        message: "What template do you want to use?",
        choices: [
            "Base",
            "With Server Packages",
        ],
        default() {
            return "Base";
        }
    })
    if (answer.ask_template === "Base") {
        return "template-base";
    } else if (answer.ask_template === "With Server Packages") {
        return "template-server-packages";
    }
}
