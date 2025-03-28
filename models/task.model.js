import { model, Schema } from "mongoose";

const taskSchema = new Schema({
    title:{
        type:String,
        required:[true, 'Title is required'],
        trim:true,
        minLength:2,
        maxLength:[100, 'Title cannot be more than 100 characters']
    },
    description:{
        type:String,
        required:[true, 'Description is required'],
        trim:true,
        maxLength:[500, 'Description cannot be more than 500 characters']
    },
    status:{
        type:String,
        required:[true, 'Status is required'],
        enum:['todo', 'inProgress', 'completed'],
        default:'todo'
    },
    priority:{
        type:String,
        required:[true, 'Priority is required'],
        enum:['low', 'normal', 'high'],
        default:'normal'
    },
    dueDate:{
        type: Date,
        required:[true, 'Due Date is required']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    
}, {timestamps:true});

const Task = new model('Tasks', taskSchema);

export default Task