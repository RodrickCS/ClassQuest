const express = require("express")

const router = express.Router()

const Middleware = require("../middleware/middleware")

const alunos = require("../controllers/alunos_controller")

router.get("/read", alunos.read)
router.get("/readOne/:id_aluno", alunos.readOne)
router.get("/readPontos/:id_aluno/:id_turma", alunos.readPontos)
router.delete("/delete/:id_aluno", Middleware.validaAcesso, alunos.excluir)
router.post("/login", alunos.login)
router.post("/create", alunos.create)
router.put("/update/:id_aluno", Middleware.validaAcesso, alunos.update)

module.exports = router
