class Table {

    constructor(array) {
        this.header = array[0]
        array.shift()
        this.body = array
    }

    get RowCounter() {
        return this.body.length
    }

    get ColumnCounter() {
        return this.header.length
    }

}

export default Table