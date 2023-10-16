import express, { response } from "express";
import { getAllRecords, getRecordById } from "../controllers/getBooks.js"
import { addRecord, updateRecord, deleteRecord } from "../controllers/updateBooks.js"
import { validator } from "../config/validators.js";
import { validationResult } from 'express-validator';


const router = express.Router();


router.get('/', async (req, res) => {
    await getAllRecords(res);
});

router.get('/:id', async (req, res) => {
    const { id } = req?.params;
    await getRecordById(id, res);
});

router.post('/add', validator.bookValidation(), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { body } = req;
    await addRecord(body, res);
});

router.put('/edit', validator.bookValidation(), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { body } = req;
    await updateRecord(body, res);
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req?.params;
    await deleteRecord(id, res);
});


export { router };



