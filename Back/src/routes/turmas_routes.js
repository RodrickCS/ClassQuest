const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const turma = require("../controllers/turmas_controller");

router.get("/readAluno", turma.readAluno);
router.get("/readProf", turma.readProf);
router.get("/readAtividades", turma.readAtividades);
router.get("/readPremios", turma.readPremios);
router.get("/readPontos", turma.readPontos);
router.delete("/delete/:id_turma", Middleware.validaAcesso, turma.excluir);
router.post("/create", Middleware.validaAcesso, turma.create);
router.put("/update/:id_turma", Middleware.validaAcesso, turma.update);
router.put(
  "/adicionarAluno/:id_turma",
  Middleware.validaAcesso,
  turma.adicionarAluno
);
router.put(
  "/adicionarProfessor/:id_turma",
  Middleware.validaAcesso,
  turma.adicionarProfessor
);

module.exports = router;
