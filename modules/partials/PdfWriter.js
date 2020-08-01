import htmlPdf from "html-pdf"
import { resolve } from "path"

class PdfWriter {

    static WritePDF(fileName, html) {

        htmlPdf.create(html, {}).toFile(resolve(`./files/${fileName}`), (error) =>  {
            error ? console.log(`Error: ${error}`) : console.log("PDF created with success")
        })

    }

}

export default PdfWriter