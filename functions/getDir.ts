import path from "path"

export default async function getDir(args: any, projectName: string) {
    if (args[1]) {
        return args[1]
    } else {
        return path.join(process.cwd(), projectName)
    }
}
