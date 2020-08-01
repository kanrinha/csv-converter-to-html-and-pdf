import Reader from "./partials/Reader.js"
import Processor from  "./partials/Processor.js"
import Table from "./partials/Table.js"
import HtmlParser from "./partials/HtmlParser.js"
import Writer from "./partials/Writer.js"
import PdfWriter from "./partials/PdfWriter.js"

class Converter {
    async ProcessingToHTML(fileName) {
        const reader = new Reader()
        const newFileName = fileName.includes(".csv") ? fileName : `${fileName}.csv` 
        const data = reader.Read(`./files/${newFileName}`)

        if (data) {
            const processedData = Processor.Process(data)
            const users = new Table(processedData)
            const processedHtml = await HtmlParser.Parse(users)
            return processedHtml
        } 

        process.exit()
    }

    async HTMLConverter(fileName) {
        const processedHtml = await this.ProcessingToHTML(fileName)
        const writer = new Writer()
        writer.Write(`${fileName}-${Date.now()}.html`, processedHtml)
    }

    async PDFConverter(fileName) {
        const processedHtml = await this.ProcessingToHTML(fileName)
        PdfWriter.WritePDF(`${fileName}-${Date.now()}.pdf`, processedHtml)
    }

    async HTMLAndPDFConverter(fileName) {
        await this.HTMLConverter(fileName)
        await this.PDFConverter(fileName)
    }
}

export default Converter