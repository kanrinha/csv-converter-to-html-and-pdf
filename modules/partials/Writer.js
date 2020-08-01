import { writeFileSync } from "fs"
import { resolve } from "path"

class Writer {

    Write(fileName, content) {

        try {
            writeFileSync(resolve(`./files/${fileName}`), content)
            console.log("HTML created with success")
        } catch(writeError) {
            console.log(`Error: ${writeError}`)
        }

    }

}

export default Writer