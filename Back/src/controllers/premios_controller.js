const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const create = async (req, res) => {
  try {
    let premio = await prisma.premios.create({
      data: req.body,
    })
    res.status(201).json(premio).end()
  } catch (err) {
    res.status(500).json(err).end()
    console.log(err);
  }
}

const read = async (req, res) => {
  try {
    let premio = await prisma.premios.findMany()
    res.status(200).json(premio).end()
  } catch (err) {
    res.status(500).json(err).end()
  }
}

const update = async (req, res) => {
  try {
    let premio = await prisma.premios.update({
      where: {
        id_premio: Number(req.params.id_premio),
      },
      data: req.body,
    })
    res.status(200).json(premio).end()
  } catch (err) {
    res.status(500).json(err).end()
  }
}

const excluir = async (req, res) => {
  try {
    let premio = await prisma.premios.delete({
      where: {
        id_premio: Number(req.params.id_premio),
      },
    })
    res.status(204).json(premio).end()
  } catch (err) {
    res.status(500).json(err).end()
  }
}

const readOne = async (req, res) => {
  try {
    let premio = await prisma.premios.findMany({
      where: {
        id_turma: Number(req.params.id_turma)
      }
    })
    res.status(200).json(premio).end()
  } catch (err) {
    res.status(500).json(err).end()
  }
}

module.exports = {
  read,
  create,
  update,
  excluir,
  readOne
}