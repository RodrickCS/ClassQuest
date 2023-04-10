const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    let atividade = await prisma.atividades.findMany();
    res.status(200).json(atividade).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err)
  }
};

const adicionarAtividade = async (req, res) => {
  try {
    let atividade = await prisma.atividades.create({
      data: req.body,
    });
    res.status(200).json(atividade).end();
  } catch (err) {
    res.status(500).end().end();
  }
};

module.exports = {
  read,
  adicionarAtividade,
};
