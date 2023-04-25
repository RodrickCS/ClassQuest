const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    let atividade = await prisma.atividades.findMany();
    res.status(200).json(atividade).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const readOne = async (req, res) => {
  try {
    let atividade = await prisma.atividades.findUnique({
      where: {
        id_atividade: Number(req.params.id_atividade),
      },
    });
    res.status(200).json(atividade).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const adicionarAtividade = async (req, res) => {
  try {
    let atividade = await prisma.atividades.create({
      data: req.body,
    });
    res.status(201).json(atividade).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const updateAtividade = async (req, res) => {
  try {
    let atividade = await prisma.atividades.update({
      where: {
        id_atividade: Number(req.params.id_atividade),
      },
      data: req.body,
    });
    res.status(200).json(atividade).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const excluir = async (req, res) => {
  try {
    let atividade = await prisma.atividades.delete({
      where: {
        id_atividade: Number(req.params.id_atividade),
      },
    });
    res.status(204).json(atividade).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const concluirTarefa = async (req, res) => {
  try {
    let atividade = await prisma.atividades_concluidas.create({
      data: req.body,
    });

    let read =
      await prisma.$queryRaw`SELECT pontos_conclusao FROM atividades WHERE id_atividade = ${req.body.id_atividade}`;

    let ponto =
      await prisma.$queryRaw`UPDATE pontos SET qtd = (SELECT qtd FROM pontos WHERE id_aluno = ${req.body.id_aluno}) + ${read[0].pontos_conclusao} WHERE id_aluno = ${req.body.id_aluno}`;

    res.status(200).json(atividade).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const readTarefaConcluida = async (req, res) => {
  try {
    let atividade = await prisma.atividades_concluidas.findMany({
      select: {
        id_atividade: true,
        id_aluno: true,
        descricao: true,
        arquivo: true,
        link: true,
        data_concluida: true,
        aluno: {
          select: {
            id_aluno: true,
            nome: true,
          },
        },
      },
    });
    res.status(200).json(atividade).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};
module.exports = {
  read,
  readOne,
  adicionarAtividade,
  updateAtividade,
  excluir,
  concluirTarefa,
  readTarefaConcluida,
};
