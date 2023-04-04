const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const bcrypt = require("bcrypt");

async function hashSenha(senha) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const senhaCriptografada = await bcrypt.hash(senha, salt);
  return senhaCriptografada;
}

const read = async (req, res) => {
  try {
    let aluno = await prisma.alunos.findMany();
    res.status(200).json(aluno).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const create = async (req, res) => {
  const senhaCrypt = await hashSenha(req.body.senha);
  try {
    let aluno = await prisma.alunos.create({
      data: {
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCrypt,
      },
    });
    res.status(201).json({ msg: "Aluno cadastrado com sucesso" });
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const login = async (req, res) => {
  const aluno = await prisma.alunos.findMany({
    where: {
      email: req.body.email,
    },
  });
  if (!aluno) {
    console.log("aluno não encontrado");
    res.status(404).json({ msg: "Aluno não encontrado" });
  }
  const senhaCorreta = await bcrypt.compare(
    hashSenha(req.body.senha),
    aluno.senha,
    function (err, result) {
      console.log(err);
    }
  );
  if (!senhaCorreta) {
    res.status(401).json({ msg: "Senha incorreta" });
  }
  return aluno;
};

module.exports = {
  read,
  create,
  login,
};
