const express = require("express")

const router = express.Router()

const Middleware = require("../middleware/middleware")

const pontos = require("../controllers/pontos_controller")

router.post("/create", pontos.create_points_profile)
router.put("/addPoints/:id_aluno/:id_turma", Middleware.validaAcesso, pontos.add_points)
router.put("/removePoints/:id_aluno/:id_turma", pontos.removePoints)
router.get("/read", pontos.read)

module.exports = router
