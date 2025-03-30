import { Router } from "express";
import { deleteTasks, getTasks, postTasks, updateTasks } from "../controllers/tasks.controller.js";
import { ExpressValidator, body, validationResult } from "express-validator";
import createTaskValidator from "../validator/createTask.validator.js";
const taskRouter = Router();

taskRouter.get('/', getTasks);

taskRouter.post('/',createTaskValidator,(req,res)=>{
    const result = validationResult(req);

    if(result.isEmpty()){
        return postTasks(req, res)
    }else{
        res.status(400).json({
            success:false,
            error:result.array()
        })
    }
    
    
} );

taskRouter.patch('/', updateTasks);
taskRouter.delete('/:id', deleteTasks);



export default taskRouter