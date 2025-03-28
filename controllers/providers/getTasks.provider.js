import Task from "../../models/task.model.js";

async function getTasksProvider(req, res){

    const tasks = await Task.find();

    return tasks
}

export default getTasksProvider