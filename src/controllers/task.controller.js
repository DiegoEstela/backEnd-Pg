const pool = require("../db/db.js");

const getAllTask = async (req, res, next) => {
  try {
    const allTask = await pool.query("SELECT * FROM taskdb");
    res.json(allTask.rows);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taskById = await pool.query("SELECT * FROM taskdb WHERE id = ($1)", [
      id,
    ]);
    if (taskById.rows.length === 0) {
      return res.status(404).json({ message: "task not found" });
    }
    res.json(taskById.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      "INSERT INTO taskdb (title, description) VALUES ($1, $2)",
      [title, description]
    );
    if (result) {
      res.send("creating a task");
    }
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taskById = await pool.query("DELETE FROM taskdb WHERE id = $1", [id]);
    if (taskById.rowCount === 0) {
      return res.status(404).json({ message: "task not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const taskById = await pool.query(
      "UPDATE taskdb SET title = $1, description = $2 WHERE id = $3 RETURNIG *",
      [title, description, id]
    );
    if (taskById.rows.length === 0) {
      return res.status(404).json({ message: "task not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTask,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
