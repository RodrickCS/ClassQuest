const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    let turma = await prisma.turmas.findMany();
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.error(err);
  }
};

const readAluno = async (req, res) => {
  try {
    let turma = await prisma.turmas.findMany({
      select: {
        id_turma: true,
        nome: true,
        codigo: true,
        alunos: {
          select: {
            id_aluno: true,
            nome: true,
            email: true,
          },
        },
      },
    });
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.error(err);
  }
};

const readProf = async (req, res) => {
  try {
    let turma = await prisma.turmas.findMany({
      select: {
        id_turma: true,
        nome: true,
        codigo: true,
        professores: {
          select: {
            id_prof: true,
            nome: true,
            email: true,
          },
        },
      },
    });
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.error(err);
  }
};

const readAtividades = async (req, res) => {
  try {
    let turma = await prisma.turmas.findMany({
      select: {
        id_turma: true,
        nome: true,
        codigo: true,
        atividades: {
          select: {
            id_atividade: true,
            descricao: true,
            prazo: true,
            pontos_conclusao: true,
          },
        },
      },
    });
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.error(err);
  }
};

const readPremios = async (req, res) => {
  try {
    let turma = await prisma.turmas.findMany({
      select: {
        id_turma: true,
        nome: true,
        codigo: true,
        premios: {
          select: {
            id_premio: true,
            descricao: true,
            pontos_requeridos: true,
          },
        },
      },
    });
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.error(err);
  }
};

const readPontos = async (req, res) => {
  try {
    let turma = await prisma.turmas.findMany({
      select: {
        id_turma: true,
        nome: true,
        codigo: true,
        pontos: {
          select: {
            id_ponto: true,
            id_aluno: true,
            id_turma: true,
            qtd: true,
          },
        },
      },
    });
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.error(err);
  }
};

const generateRandomString = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
  }
  return randomString;
};

const create = async (req, res) => {
  try {
    let turma = await prisma.turmas.create({
      data: {
        nome: req.body.nome,
        codigo: generateRandomString(),
      },
    });
    res.status(201).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const adicionarAluno = async (req, res) => {
  try {
    let turma = await prisma.turmas.update({
      where: {
        id_turma: Number(req.params.id_turma),
      },
      data: {
        alunos: {
          connect: {
            id_aluno: req.body.id_aluno,
          },
        },
      },
    });
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};
const adicionarProfessor = async (req, res) => {
  try {
    let turma = await prisma.turmas.update({
      where: {
        id_turma: Number(req.params.id_turma),
      },
      data: {
        professores: {
          connect: {
            id_prof: req.body.id_prof,
          },
        },
      },
    });
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const update = async (req, res) => {
  try {
    let turma = await prisma.turmas.update({
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
    let turma = await prisma.turmas.delete({
      where: {
        id_turma: Number(req.params.id_turma),
      },
    });
    res.status(204).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const checkTurma = async (req, res) => {
  try {
    let turma =
      await prisma.$queryRaw`SELECT * FROM turmas WHERE codigo = ${req.body.codigo}`;
    res.status(200).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

module.exports = {
  readAluno,
  create,
  update,
  adicionarAluno,
  adicionarProfessor,
  excluir,
  read,
  readProf,
  readAtividades,
  readPremios,
  readPontos,
  checkTurma
};
