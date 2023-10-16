import { readJSONFile } from "../helpers/helper.js"

export const getAllRecords = async (res) => {
    try {
        const data = await readJSONFile();
        res.json(data);
    } catch (e) {
        console.log('Error getAllRecords: ', e);
        res.status(500).send("Error Occured while fetching the record");
    }

}

export const getRecordById = async (bookId, res) => {
    try {
        const data = await readJSONFile();
        const filterData = data?.books?.filter(book => book.id === bookId);
        if (filterData && filterData.length === 0) {
            res.status(400).send({
                error: true,
                message: "Book not Found"
            });
        } else {
            res.json(filterData);
        }
    } catch (e) {
        console.log('Error getRecordById :', e);
        res.status(500).send("Error Occured while fetching the record");
    }
}