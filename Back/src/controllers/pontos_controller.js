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
    console.log(err);
  }
};

const add_points = async (req, res) => {
  try {
    var ponto =
      await prisma.$queryRaw`UPDATE pontos SET qtd = (SELECT qtd WHERE id_aluno = ${req.params.id_aluno} AND id_turma = ${req.params.id_turma} LIMIT 1) + ${req.body.qtd} WHERE id_aluno = ${req.params.id_aluno} AND id_turma = ${req.params.id_turma}`;
    res.status(200).json({ msg: "Pontos atribuídos" }).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const removePoints = async (req, res) => {
  try {
    const alunoId = Number(req.params.id_aluno);
    const turmaId = Number(req.params.id_turma);
    const qtdRemove = req.body.qtdRemove;

    const ponto = await prisma.pontos.findMany({
      where: {
        id_aluno: alunoId,
        id_turma: turmaId,
      },
    });

    if (!ponto) {
      return res.status(404).json({ error: "Ponto não encontrado" }).end();
    } else if (ponto[0].qtd < req.body.qtdRemove) {
      return res.status(400).json({ error: "Você não tem pontos suficientes" });
    }

    const qtdAtualizada = ponto[0].qtd - qtdRemove;

    const pontoAtualizado = await prisma.pontos.update({
      where: {
        id_ponto: ponto[0].id_ponto,
      },
      data: {
        qtd: qtdAtualizada,
      },
    });

    res.status(200).json(pontoAtualizado).end();
  } catch (err) {
    console.log(err);
    res.status(500).json(err).end();
  }
};
module.exports = {
  read,
  create_points_profile,
  add_points,
  removePoints,
};
