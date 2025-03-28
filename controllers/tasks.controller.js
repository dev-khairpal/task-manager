import Task from "../models/task.model.js";
import createTaskProvider from "./providers/createTask.provider.js";
import getTasksProvider from "./providers/getTasks.provider.js";

export const getTasks = async(req, res) => {

    const tasks = await getTasksProvider(req, res);


  res.status(200).json({
    success: true,
    data: tasks,
  });
};

export const postTasks = async (req, res) => {
  const task = await createTaskProvider(req, res);

  res.status(201).json({
    success: true,
    message: "Task created",
    data: task,
  });
};
export const updateTasks = (req, res) => {
  res.send("PATCH TASKS CONTROLLER");
};

export const deleteTasks = (req, res) => {
  res.send("Delete TASKS CONTROLLER");
};
