
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const alunos_routes = require("./src/routes/alunos_routes")
const professores_routes = require("./src/routes/professores_routes")

const corsOptions = {
  origin: "http://meuapp.com"
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/alunos", alunos_routes)
app.use("/professores", professores_routes)


app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
