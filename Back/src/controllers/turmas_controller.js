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

const generateUniqueCode = () => {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substr(2, 5);
  return timestamp + randomString;
};

const create = async (req, res) => {
  try {
    let turma = await prisma.turma.create({
      data: {
        nome: req.body.nome,
        codigo: generateUniqueCode(),
      },
    });
    res.status(201).json(turma).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const adicionarAluno = async (req, res) => {
  try{
    let turma = await prisma.turma.update({
      where:{
        id_turma: Number(req.params.id_turma)
      },
      data:{
        professores:{
          connect:{
            id_prof: Number(req.body.id_prof)
          }
        }
      }
    })
  }catch(err){

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
  adicionarAluno,
  excluir,
};
