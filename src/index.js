const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const taskRoutes = require("./routes/task.routes");

const app = express();
app.use(cors());
app.use(morgan("dev"));
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
