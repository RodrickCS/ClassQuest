const uriReadOneAluno = "http://localhost:3000/alunos/readOne/";
const uriAtividadesPendentes =
  "http://localhost:3000/atividades/readPendentes/";

var aluno = [];

const voltar = () => {
  window.location.href = "../alunosHome/index.html";
};

const checkUser = () => {
  if (localStorage.getItem("token") !== null) {
    const tokenJWT = localStorage.getItem("token");
    const info = localStorage.getItem("info_user_login");

    let nome = JSON.parse(info).nome;

    document.querySelector(".nomeAluno").innerHTML = nome;

    try {
      const payload = JSON.parse(
        atob(encodeURIComponent(tokenJWT).split(".")[1])
      );
      console.log(payload);
      const expiracao = payload.exp;
      const agora = Math.floor(Date.now() / 1000);

      if (agora >= expiracao) {
        logout();
        return false;
      }

      return true;
    } catch (err) {
      logout();
      return false;
    }
  } else {
    window.location.href = "../login/index.html";
  }
};

const fetchOneAluno = () => {
  let info = localStorage.getItem("info_user_login");

  let id = JSON.parse(info);

  const options = {
    method: "GET",
  };

  fetch(uriReadOneAluno + id.id_aluno, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      aluno = data;
      preencherAccordionSuasTurmas(data.turma);
      document.querySelector(".nomeAluno").innerHTML = aluno.nome;
      console.log(aluno);
    });
};

const fecthAtividadesPendentes = () => {
  let info = localStorage.getItem("info_user_login");

  let id = JSON.parse(info);

  const options = {
    method: "GET",
  };

  fetch(uriAtividadesPendentes + id.id_aluno, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      preencherAccordionTarefasPendentes(data);
    });
};

const preencherAccordionSuasTurmas = (dados) => {
  dados.forEach((turma) => {
    let div = document.createElement("div");
    div.classList.add("card-body");
    div.innerHTML = `${turma.nome}`;
    document.querySelector("#collapseOne").appendChild(div);
  });
};

const preencherAccordionTarefasPendentes = (dados) => {
  dados.forEach((atividade) => {
    let div = document.createElement("div");
    let pTitulo = document.createElement("p");
    let pPrazo = document.createElement("p");
    let pPontosConclusao = document.createElement("p");
    let pNomeTurma = document.createElement("p");

    pTitulo.innerHTML = "Titulo:  " + atividade.titulo;
    pPrazo.innerHTML = "Prazo:  " + atividade.prazo.split("T")[0];
    pPontosConclusao.innerHTML = "Pontos:  " + atividade.pontos_conclusao;
    pNomeTurma.innerHTML = "Nome da Turma:  " + atividade.nome_turma;

    div.classList.add("card-body");
    div.appendChild(pTitulo);
    div.appendChild(pNomeTurma);
    div.appendChild(pPrazo);
    div.appendChild(pPontosConclusao);

    document.querySelector("#collapseTwo").appendChild(div);
  });
};

fetchOneAluno();
fecthAtividadesPendentes();
