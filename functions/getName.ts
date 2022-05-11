import inquirer from "inquirer";

export default async function getName(args: any) {
    if (args[0]) {
        return args[0]
    } else {
        const answer = await inquirer.prompt({
            name: "project_name",
            type: "input",
            message: "Project name:",
            default() {
                return "my-knit-project";
            }
        })
        return answer.project_name
    }
}
