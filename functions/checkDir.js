import fs from "fs-extra";

export default async function checkDir(dir) {
    if (fs.existsSync(dir)) {
        return true
    } else {
        return false
    }
}
