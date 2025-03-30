import { body } from "express-validator"

const createTaskValidator = [
    body("title","Title cannot be empty").notEmpty(),
    body("title","Title must be a String").isString(),
    body("title").trim(),
    body("title","Title must not be more than 100 characters").isLength({max:100}),
    body("dueDate","dueDate has to be a valid ISO8601 string").notEmpty().isISO8601(),
    body('description').notEmpty().isString().trim(),
    body('description','Description cannot be more than 500 chars').isLength({max:500}),
    body('priority').isIn(['low','normal','high']),
    body('status').isIn(['todo','inProgress','completed'])
]

export default createTaskValidator