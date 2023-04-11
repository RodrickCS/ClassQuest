const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const alunos_routes = require("./src/routes/alunos_routes");
const professores_routes = require("./src/routes/professores_routes");
const turmas_routes = require("./src/routes/turmas_routes");
const atividades_routes = require("./src/routes/atividades_routes");
const arquivo_routes = require("./src/routes/arquivos_routes");
const pontos_routes = require("./src/routes/pontos_routes");
const premios_routes = require("./src/routes/premios_routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/alunos", alunos_routes);
app.use("/professores", professores_routes);
app.use("/turmas", turmas_routes);
app.use("/atividades", atividades_routes);
app.use("/arquivos", arquivo_routes);
app.use("/pontos", pontos_routes);
app.use("/premios", premios_routes);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
