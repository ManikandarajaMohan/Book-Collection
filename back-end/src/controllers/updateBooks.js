import { readJSONFile, writeJSONFile } from "../helpers/helper.js"

export const addRecord = async (body, res) => {
    try {
        const data = await readJSONFile();
        const { books } = data;
        const bookExists = books.findIndex(b => b.id === body.id);
        if (bookExists !== -1) {
            res.status(400).send({
                error: true,
                message: "Book ID Already Exists"
            });
        } else {
            data.books.push(body);
            await writeJSONFile(data);
            res.send({
                error: false,
                message: "Book added Successfully"
            });
        }
    } catch (e) {
        console.log('Error addRecord: ', e);
        res.status(500).send("Failed to update record");
    }
}

export const updateRecord = async (body, res) => {
    try {
        const data = await readJSONFile();
        const { books } = data;
        const bookExists = books.findIndex(b => b.id === body.id);
        if (bookExists === -1) {
            res.status(400).send({
                error: true,
                message: "Book not Found"
            });
        } else {
            data.books[bookExists] = body;
            await writeJSONFile(data);
            res.send({
                error: false,
                message: "Book updated Successfully"
            });
        }
    } catch (e) {
        console.log('Error updateRecord: ', e);
        res.status(500).send("Failed to update record");
    }
}

export const deleteRecord = async (bookId, res) => {

    try {
        const data = await readJSONFile();
        const { books } = data;
        const bookExists = books.findIndex(b => b.id === bookId);
        if (bookExists === -1) {
            res.status(400).send({
                error: true,
                message: "Book not Found"
            });
        } else {
            const filteredBooks = books.filter(b => b.id !== bookId);
            data.books = filteredBooks;
            await writeJSONFile(data)
            res.send({
                error: false,
                message: "Book deleted Successfully"
            });
        }
    } catch (e) {
        console.log('Error deleteRecord: ', e);
        res.status(500).send("Failed to delete record");
    }
}

