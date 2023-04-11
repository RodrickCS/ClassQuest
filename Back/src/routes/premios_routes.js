const express = require("express");

const router = express.Router();

const premios = require("../controllers/premios_controller");

router.post("/create", premios.create);
router.put("/update/:id_premio", premios.update);
router.get("/read", premios.read);
router.delete("/excluir/:id_premio", premios.excluir);


module.exports = router;
