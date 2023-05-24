const app = require("./src/app");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
});
