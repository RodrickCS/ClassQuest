const jwt = require("jsonwebtoken");
require("dotenv").config();

const validaAcessoApi = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === undefined) {
    res.status(401).json({ msg: "Você não tem acesso a esta página" }).end();
  } else {
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.KEY, (err, data) => {
      if (err !== null) {
        res.status(400).json(err).end();
      } else {
        const isAdmin = data.nivel_de_acesso === "Admin";
        isAdmin
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
  validaAcessoApi,
  
};
