
const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const atividades = require("../controllers/atividades_controller");

router.post("/create", atividades.adicionarAtividade);
router.post("/concluir", atividades.concluirTarefa);
router.post("/concluirNovamente", atividades.adicionarTarefa);
router.put("/update/:id_atividade", Middleware.validaAcesso ,atividades.updateAtividade);
router.get("/read", atividades.read);
router.get("/readOne/:id_atividade", atividades.readOne);
router.get("/readConcluida", atividades.readTarefaConcluida);
router.get("/viewAtividades", atividades.viewAtividadeConcluida);
router.get("/readPendentes/:id_aluno", atividades.readPendentes);
router.delete("/excluir/:id_atividade", Middleware.validaAcesso ,atividades.excluir);

module.exports = router;