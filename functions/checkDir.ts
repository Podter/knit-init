import fs from "fs-extra";

export default async function checkDir(dir: fs.PathLike) {
    if (fs.existsSync(dir)) {
        return true
    } else {
        return false
    }
}
