const express = require("express")

const router = express.Router()

const Middleware = require("../middleware/middleware")

const professor = require("../controllers/professores_controller")

router.get("/read", professor.read)
router.get("/readOne/:id_prof", professor.readOne)
router.delete("/delete/:id_prof", Middleware.validaAcesso, professor.excluir)
router.post("/login", professor.login)
router.post("/create", professor.create)
router.put("/update/:id_prof", Middleware.validaAcesso, professor.update)

module.exports = router
