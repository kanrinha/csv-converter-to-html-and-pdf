import ejs from "ejs"
import { resolve } from "path"

class HtmlParser {

    static async Parse(table) {
        return await ejs.renderFile(resolve("./view/table.ejs"), { tableHeader: table.header, tableBody: table.body })
    }

}

export default HtmlParser