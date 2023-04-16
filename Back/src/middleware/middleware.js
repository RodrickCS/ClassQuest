const jwt = require("jsonwebtoken");
require("dotenv").config();

const validaAcesso = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === undefined) {
    res.status(401).json({ msg: "Você não tem acesso a este recurso" }).end();
  } else {
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.KEY, (err, data) => {
      if (err !== null) {
        res.status(400).json(err).end();
      } else {
        const isProfessor = data.nivel_de_acesso === "Professor";
        isProfessor
          ? next()
          : res
              .status(401)
              .json({ msg: "Você não tem acesso a este recurso" })
              .end();
      }
    });
  }
};

module.exports = {
  validaAcesso,
};
