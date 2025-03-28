import { Router } from "express";
import { deleteTasks, getTasks, postTasks, updateTasks } from "../controllers/tasks.controller.js";

const taskRouter = Router();

taskRouter.get('/', getTasks);
taskRouter.post('/', postTasks);
taskRouter.patch('/', updateTasks);
taskRouter.delete('/:id', deleteTasks);



export default taskRouter