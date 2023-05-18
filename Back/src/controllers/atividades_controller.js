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
    console.log(err);
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
      await prisma.$queryRaw`UPDATE pontos 
      SET qtd = (SELECT SUM(qtd) FROM pontos WHERE id_aluno = ${req.body.id_aluno}) + ${read[0].pontos_conclusao} 
      WHERE id_aluno = ${req.body.id_aluno} 
      LIMIT 1`;

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
        arquivo: true,
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

const readPendentes = async (req, res) => {
  try {
    let atividade = await prisma.$queryRaw`SELECT a.*, t.id_turma, t.nome as nome_turma
    FROM atividades a
    LEFT JOIN atividades_concluidas ac ON ac.id_atividade = a.id_atividade AND ac.id_aluno = ${req.params.id_aluno}
    INNER JOIN  turmas t on t.id_turma = a.id_turma
    WHERE ac.id_concluida IS NULL;
    `;
    res.status(200).json(atividade).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};


const viewAtividadeConcluida = async (req, res) => {
  try {
    let atividade = await prisma.$queryRaw`SELECT DISTINCT ac.id_atividade, at.titulo, at.descricao, ac.id_aluno, al.nome AS aluno, ac.arquivo, ac.data_concluida, t.id_turma, t.nome AS turma FROM atividades_concluidas ac
  INNER JOIN atividades at 
  ON ac.id_atividade = at.id_atividade
  INNER JOIN alunos al
  ON ac.id_aluno = al.id_aluno
  INNER JOIN turmas t
  ON t.id_turma = at.id_turma
  GROUP BY ac.id_atividade;
  `;
    res.status(200).json(atividade)
  } catch (err) {
    res.status(500).json(err)
    console.log(err);
  }
}

module.exports = {
  read,
  readOne,
  adicionarAtividade,
  updateAtividade,
  excluir,
  concluirTarefa,
  readTarefaConcluida,
  readPendentes,
  viewAtividadeConcluida
};
