
const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const professor = require("../controllers/professores_controller");

router.get("/read", Middleware.validaAcessoApi, professor.read);
router.delete("/delete/:id_prof", professor.excluir);
router.post("/login", professor.login);
router.post("/create", professor.create);
router.put("/update/:id_prof", professor.update);

module.exports = router;