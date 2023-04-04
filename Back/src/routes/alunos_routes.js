
const express = require("express");

const router = express.Router();

const alunos = require("../controllers/alunos_controller");

router.get("/read", alunos.read);
router.post("/login", alunos.login);
router.post("/create", alunos.create);

module.exports = router;