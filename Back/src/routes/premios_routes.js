const express = require("express")

const router = express.Router()

const Middleware = require("../middleware/middleware")

const premios = require("../controllers/premios_controller")

router.post("/create", Middleware.validaAcesso, premios.create)
router.put("/update/:id_premio", Middleware.validaAcesso, premios.update)
router.get("/read", premios.read)
router.get("/readOne/:id_turma", premios.readOne)
router.delete("/excluir/:id_premio", Middleware.validaAcesso, premios.excluir)

module.exports = router
