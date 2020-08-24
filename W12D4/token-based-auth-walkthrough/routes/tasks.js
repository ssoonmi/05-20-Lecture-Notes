const express = require("express");
const db = require("../db/models");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");
const router = express.Router();

const { Task } = db;

router.use(requireAuth);

const validateTask = [
  //  Task name cannot be empty:
  check("name") // sees if `req.body.name` exists
    .exists({ checkFalsy: true })
    .withMessage("Task name can't be empty."),
  //  Task name cannot be longer than 255 characters:
  check("name") // sees if `req.body.name` is longer than 255 characters
    .isLength({ max: 255 })
    .withMessage("Task name can't be longer than 255 characters."),
  check("color") // sees if `req.body.color` is included in the string
    .inIn(['red', 'yellow'])
    .withMessage("Task color is invalid."),
]; // an array of middleware functions

router.get(
  "/",
  asyncHandler(async (req, res) => {
    console.log('GET /tasks handler');
    const tasks = await Task.findAll();
    res.json({ tasks });
  })
);

router.post(
  "/",
  validateTask,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    console.log('POST /tasks handler');
    const { name } = req.body;
    const task = await Task.create({ name });
    res.status(201).json({ task });
  })
);

const taskNotFoundError = (id) => {
  console.log('taskNotFoundError function');
  const err = Error(`Task with id of ${id} could not be found.`);
  err.title = "Task not found.";
  err.status = 404;
  return err;
};

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    console.log('GET /tasks/:id handler');
    const taskId = parseInt(req.params.id, 10);
    const task = await Task.findByPk(taskId);

    if (task) {
      res.json({ task });
    } else {
      next(taskNotFoundError(taskId));
    }
  })
);

router.put(
  "/:id(\\d+)",
  validateTask,
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
    console.log('PUT /tasks/:id handler');
    const taskId = parseInt(req.params.id, 10);
    const task = await Task.findByPk(taskId);

    if (task) {
      await task.update({ name: req.body.name });
      res.json({ task });
    } else {
      next(taskNotFoundError(taskId));
    }
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    console.log('DELETE /tasks/:id handler');
    const taskId = parseInt(req.params.id, 10);
    const task = await Task.findByPk(taskId);

    if (task) {
      await task.destroy();
      res.status(204).end();
    } else {
      next(taskNotFoundError(taskId));
    }
  })
);

module.exports = router;