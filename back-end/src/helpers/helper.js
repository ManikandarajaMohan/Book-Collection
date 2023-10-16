import fs from "fs";
import { filePath, fileFormat } from "../config/config.js";

const fsPromises = fs.promises;



export const readJSONFile = async (path = filePath, format = fileFormat) => {
    try {
        const content = await fsPromises.readFile(path, format);
        return JSON.parse(content.toString());
    } catch (e) {
        console.log('Something went wrong while reading File', e);
        throw new Error('Something went wrong while reading File');
    }
}

export const writeJSONFile = async (parsedData, path = filePath, format = fileFormat) => {
    try {
        await fsPromises.writeFile(path, JSON.stringify(parsedData, null, 2), format);
        return {
            error:false,
            message: "Updated file successfully"
        };
    } catch (e) {
        console.log('Failed to write updated data to file', e);
        throw new Error('Failed to write updated data to file');

    }
}