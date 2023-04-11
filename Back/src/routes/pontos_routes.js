const express = require("express");

const router = express.Router();

const pontos = require("../controllers/pontos_controller");

router.post("/create", pontos.create_points_profile);
router.put("/addPoints/:id_ponto", pontos.add_points);
router.get("/read", pontos.read);

module.exports = router;
