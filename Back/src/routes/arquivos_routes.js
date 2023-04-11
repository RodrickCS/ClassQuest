const express = require("express");

const router = express.Router();

const arquivo = require("../controllers/arquivos_controller");

router.post("/enviar", arquivo.enviarArquivo);

module.exports = router;
