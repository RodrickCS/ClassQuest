
const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const atividades = require("../controllers/atividades_controller");

router.post("/create", atividades.adicionarAtividade);
router.post("/concluir", atividades.concluirTarefa);
router.put("/update/:id_atividade", atividades.updateAtividade);
router.get("/read", atividades.read);
router.get("/readConcluida", atividades.readTarefaConcluida);
router.delete("/excluir/:id_atividade", atividades.excluir);

module.exports = router;