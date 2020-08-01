import readLineSync from "readline-sync"
import Converter from "./modules/Converter.js"

(async () => {
    const optionManager = async (chosenOption, fileName) => {
        const converter = new Converter()
        const allOptions = {
            option0: async (fileName) => {
                await converter.HTMLConverter(fileName)
            },
            option1: async (fileName) => {
                await converter.PDFConverter(fileName)
            },
            option2: async (fileName) => {
                await converter.HTMLAndPDFConverter(fileName)
            }
        }
        allOptions[`option${chosenOption}`](fileName)
    }

    const options = ["CSV to HTML", "CSV to PDF", "CSV to HTML and PDF"]
    const chosenOption = readLineSync.keyInSelect(options, "Do you want to convert to what? ")

    const fileName = chosenOption !== -1 ? (
        readLineSync.question("What the file name is? ")
    ) : ( 
        console.log("\u001b[31m Bye Bye!"),
        process.exit()
    )

    optionManager(chosenOption, fileName)
})()