import Task from "../../models/task.model.js"

async function deleteTaskProvider (req, res){
    const id = req.params.id
    return await Task.deleteOne({_id:id})
}

export default deleteTaskProvider