const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    let turma = await prisma.turma.findMany();
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const create = async (req, res) => {
  try {
    let turma = await prisma.turma.create({
      data: req.body,
    });
    res.status(201).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const update = async (req, res) => {
  try {
    let turma = await prisma.turma.update({
      where: {
        id_turma: Number(req.params.id_turma),
      },
      data: req.body,
    });
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const excluir = async (req, res) => {
  try {
    let turma = await prisma.turma.delete({
      where: {
        id_turma: Number(req.params.id_turma),
      },
    });
    res.status(204).json(turma).end();
  } catch (err) {}
  res.status(500).json(err).end();
};

module.exports = {
  read,
  create,
  update,
  excluir
};
