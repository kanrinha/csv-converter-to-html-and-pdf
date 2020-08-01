class Processor {

    static Process(data) {

        const dataArray = data.split("\r\n")
        let rows = []
        
        dataArray.forEach(row => {
            const separeteData = row.split(",")
            rows.push(separeteData)
        })

        return rows
    }

}

export default Processor