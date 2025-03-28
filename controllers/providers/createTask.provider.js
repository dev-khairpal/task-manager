import Task from "../../models/task.model.js";

async function createTaskProvider(req, res) {
  const { title, description, status, priority, dueDate, createdAt } = req.body;

  const task = new Task({
    title,
    description,
    status,
    priority,
    dueDate,
    createdAt,
  });
  return await task.save();


}

export default createTaskProvider