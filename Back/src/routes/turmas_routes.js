
const express = require("express");

const router = express.Router();

const Middleware = require("../middleware/middleware");

const turma = require("../controllers/turmas_controller");

router.get("/read", turma.read);
router.delete("/delete/:id_turma", turma.excluir)
router.post("/create", turma.create);
router.put("/update/:id_turma", turma.update);

module.exports = router;