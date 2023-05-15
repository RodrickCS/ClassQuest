const express = require("express");
const router = express.Router();
const multer = require("multer");


const arquivo = require("../controllers/arquivos_controller");

const upload = multer({ dest: 'temp/' });

router.post("/enviar", upload.single('file'), arquivo.uploadAzure);

module.exports = router;
