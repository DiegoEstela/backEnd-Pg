const express = require("express");
const cors = require("cors");
const taskRoutes = require("./src/routes/task.routes");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(taskRoutes);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
});
