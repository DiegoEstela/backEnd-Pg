const express = require("express");

const cors = require("cors");
const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(taskRoutes);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

module.exports = app;
