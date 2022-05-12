import fs from "fs-extra";

export default function checkDir(dir) {
    if (fs.existsSync(dir)) {
        return true
    } else {
        return false
    }
}
