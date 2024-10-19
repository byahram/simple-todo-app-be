const Task = require("../model/Task");

const taskController = {};

// createTask
taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });
    await newTask.save();

    res.status(200).json({ status: "ok", data: newTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

// getTasks
taskController.getTasks = async (req, res) => {
  try {
    const taskList = await Task.find({}).select("-__v");

    res.status(200).json({ status: "ok", data: taskList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

// HW: updateTask
taskController.updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updateTask)
      throw new Error(`Could not find the task "${req.params.id}"`);

    // const updateTask = await Task.findById(req.params.id);
    // Object.keys(req.body).forEach((key) => {
    //   updateTask[key] = req.body[key];
    // });
    // await updateTask.save();

    res.status(200).json({ status: "success", data: updateTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

// HW: deleteTask
taskController.deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask)
      throw new Error(`Could not delete the task "${req.params.id}"`);

    res.status(200).json({ status: "success", data: deleteTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

module.exports = taskController;
