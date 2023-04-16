const uriReadOneProf = "http://localhost:3000/professores/readOne/";
const uriCreateTurma = "http://localhost:3000/turmas/create";
const uriAddProf = "http://localhost:3000/turmas/adicionarProfessor/";

var professor = [];

const fetchOneProfessor = () => {
  let info = localStorage.getItem("info_user_login");

  let id = JSON.parse(info);

  const options = {
    method: "GET",
  };

  fetch(uriReadOneProf + id.id_prof, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      professor = data;
      console.log(professor);
    });
};

const criarTurma = () => {
  let form = {
    nome: "Turma de Desenvolvimento de Sistemas 3DES",
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(form),
  };

  fetch(uriCreateTurma, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (data.id_turma) {
        adicionarProfessor(data.id_turma, professor.id_prof);
      } else {
        alert("Hove um erro na hora de criar uma turma");
      }
    });
};

const adicionarProfessor = (id_turma, id_prof) => {
  let form = {
    id_prof: id_prof,
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(form),
  };
  fetch(uriAddProf + id_turma, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    });
};

const buildTurmasCard = (dados) => {
  const divPai = document.createElement("div");
  const divHeader = document.createElement("div");
  const divBody = document.createElement("div");
};

fetchOneProfessor();
