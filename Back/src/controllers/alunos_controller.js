const { PrismaClient } = require("@prisma/client")
const jwt = require("jsonwebtoken")
const prisma = new PrismaClient()

require("dotenv").config()

const bcrypt = require("bcrypt")

async function hashSenha(senha) {
  const saltRounds = 14
  const salt = await bcrypt.genSalt(saltRounds)
  const senhaCriptografada = await bcrypt.hash(senha, salt)
  return senhaCriptografada
}

const read = async (req, res) => {
  try {
    let aluno = await prisma.alunos.findMany({
      select: {
        id_aluno: true,
        nome: true,
        email: true,
        nivel_de_acesso: true,
        pontos: true,
      },
    })
    res.status(200).json(aluno).end()
  } catch (err) {
    res.status(500).json(err).end()
    console.log(err)
  }
}

const readOne = async (req, res) => {
  try {
    let aluno = await prisma.alunos.findUnique({
      where: {
        id_aluno: Number(req.params.id_aluno),
      },
      select: {
        id_aluno: true,
        nome: true,
        email: true,
        nivel_de_acesso: true,
        pontos: true,
        turma: {
          select: {
            id_turma: true,
            nome: true,
            atividades: true,
          },
        },
      },
    })
    res.status(200).json(aluno).end()
  } catch (err) {
    res.status(500).json(err).end()
    console.log(err)
  }
}

const create = async (req, res) => {
  const senhaCrypt = await hashSenha(req.body.senha)
  try {
    let aluno = await prisma.alunos.create({
      data: {
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCrypt,
      },
    })

    res.status(201).json({ msg: "Aluno cadastrado com sucesso" })
  } catch (err) {
    res.status(500).json(err).end()
    console.log(err)
  }
}

const login = async (req, res) => {
  const aluno = await prisma.alunos.findUnique({
    where: {
      email: req.body.email,
    },
  })
  if (!aluno) {
    return res.status(404).json({ msg: "Aluno não encontrado" }).end()
  }
  const checkPswd = await bcrypt.compare(req.body.senha, aluno.senha)

  if (!checkPswd) {
    res.status(401).json({ msg: "Senha incorreta" }).end()
  } else {
    jwt.sign(
      { ...aluno },
      process.env.KEY,
      { expiresIn: "3h" },
      function (err, token) {
        if (err == null) {
          aluno["token"] = token
          delete aluno.senha
          res
            .status(200)
            .json({
              msg: "Login efetuado",
              info: {
                nome: aluno.nome,
                id_aluno: aluno.id_aluno,
                nivel_de_acesso: aluno.nivel_de_acesso,
              },
              token: token,
            })
            .end()
        } else {
          res.status(500).json(err).end()
          console.log(err)
        }
      }
    )
  }
}

const excluir = async (req, res) => {
  try {
    let aluno = await prisma.alunos.delete({
      where: {
        id_aluno: Number(req.params.id_aluno),
      },
    })
    res.status(204).json(aluno).end()
  } catch (err) {
    res.status(500).json(err).end()
    console.log(err)
  }
}

const update = async (req, res) => {
  try {
    let aluno = await prisma.alunos.update({
      where: {
        id_aluno: Number(req.params.id_aluno),
      },
      data: req.body,
    })
    res.status(200).json(aluno).end()
  } catch (err) {
    res.status(500).json(err).end()
    console.log(err)
  }
}

module.exports = {
  read,
  readOne,
  create,
  login,
  excluir,
  update,
}
