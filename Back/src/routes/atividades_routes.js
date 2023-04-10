
const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const atividades = require("../controllers/atividades_controller");

router.post("/create", atividades.adicionarAtividade);
router.get("/read", atividades.read);

module.exports = router;