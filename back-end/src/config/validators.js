import { body } from 'express-validator';

export const validator = {
    bookValidation: () => [
        body('name').isString().notEmpty(),
        body('author').isString().notEmpty(),
        body('publishedDate').isInt().notEmpty(),
        body('description').isString().notEmpty(),
        body('id').isString().notEmpty(),
        body('coverImg').isString().notEmpty(),
        body('imageName').isString().notEmpty()
    ]
}