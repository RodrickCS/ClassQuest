const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    let ponto = await prisma.pontos.findMany();
    res.status(200).json(ponto).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const create_points_profile = async (req, res) => {
  try {
    let ponto = await prisma.pontos.create({
      data: req.body,
    });
    res.status(200).json(ponto).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const add_points = async (req, res) => {
  try {
    let ponto = await prisma.$queryRaw`UPDATE pontos SET qtd = (SELECT qtd FROM pontos WHERE id_aluno = ${req.params.id_aluno}) + ${req.body.qtd} WHERE id_aluno = ${req.params.id_aluno}`
    res.status(200).json(ponto).end();
    console.log(ponto)
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

module.exports = {
  read,
  create_points_profile,
  add_points,
};