const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

require("dotenv").config();

const bcrypt = require("bcrypt");

async function hashSenha(senha) {
  const saltRounds = 14;
  const salt = await bcrypt.genSalt(saltRounds);
  const senhaCriptografada = await bcrypt.hash(senha, salt);
  return senhaCriptografada;
}

const read = async (req, res) => {
  try {
    let professor = await prisma.professores.findMany();
    res.status(200).json(professor).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const create = async (req, res) => {
  const senhaCrypt = await hashSenha(req.body.senha);
  try {
    let professor = await prisma.professores.create({
      data: {
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCrypt,
      },
    });

    res.status(201).json({ msg: "professor cadastrado com sucesso" });
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const login = async (req, res) => {
  const professor = await prisma.professores.findUnique({
    where: {
      email: req.body.email,
    },
  });
  if (!professor) {
    return res.status(404).json({ msg: "Professor não encontrado" }).end();
  }
  const checkPswd = await bcrypt.compare(req.body.senha, professor.senha);

  if (!checkPswd) {
    res.status(401).json({ msg: "Senha incorreta" }).end();
  } else {
    jwt.sign(
      { ...professor },
      process.env.KEY,
      { expiresIn: "3h" },
      function (err, token) {
        if (err == null) {
          professor["token"] = token;
          delete professor.senha;
          res
            .status(200)
            .json({
              msg: "Login efetuado",
              info: { id_prof: professor.id_prof },
              token: token
            })
            .end();
        } else {
          res.status(500).json(err).end();
          console.log(err);
        }
      }
    );
  }
};

const excluir = async (req, res) => {
  try {
    let professor = await prisma.professores.delete({
      where: {
        id_prof: Number(req.params.id_prof),
      },
    });
    res.status(204).json(professor).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const update = async (req, res) => {
  if (req.body.senha) {
    const senhaCrypt = await hashSenha(req.body.senha);
    req.body.senha = senhaCrypt;
  }
  try {
    let professor = await prisma.professores.update({
      where: {
        id_prof: Number(req.params.id_prof),
      },
      data: req.body,
    });
    res.status(200).json(professor).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

module.exports = {
  read,
  create,
  login,
  excluir,
  update,
};
