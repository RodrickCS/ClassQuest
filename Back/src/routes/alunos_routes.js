const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const alunos = require("../controllers/alunos_controller");

router.get("/read", alunos.read);
router.delete("/delete/:id_aluno", Middleware.validaAcesso, alunos.excluir);
router.post("/login", alunos.login);
router.post("/create", Middleware.validaAcesso, alunos.create);
router.put("/update/:id_aluno", Middleware.validaAcesso, alunos.update);

module.exports = router;
