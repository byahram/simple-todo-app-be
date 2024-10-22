const express = require("express");
const taskController = require("../controller/taskController");
const authController = require("../controller/authController");
const router = express.Router();

router.get("/", taskController.getTasks);
router.post("/", authController.authenticate, taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
