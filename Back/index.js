
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const alunos_routes = require("./src/routes/alunos_routes")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/alunos", alunos_routes)


app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
