const express = require("express");
const router = express.Router();
const taskRouter = require("./taskRouter");
const userRouter = require("./userRouter");

router.use("/tasks", taskRouter);
router.use("/user", userRouter);

module.exports = router;
