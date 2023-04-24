const uriReadOneAluno = "http://localhost:3000/alunos/readOne/";
const uriCheckTurma = "http://localhost:3000/turmas/checkTurma";
const uriAddAluno = "http://localhost:3000/turmas/adicionarAluno/";

var dadosCard = [];

var aluno = [];

const openModal = () => {
  document.querySelector(".back_modal").classList.remove("model");
};
const closeModal = () => {
  document.querySelector(".back_modal").classList.add("model");
};

const checkUser = () => {
  console.log("MAOE 11");
  if (localStorage.getItem("token") !== null) {
    console.log("MAOE");
    const tokenJWT = localStorage.getItem("token");
    const info = localStorage.getItem("info_user_login");

    let nome = JSON.parse(info).nome;

    document.querySelector(".nomeAluno").innerHTML = nome;

    try {
      const payload = JSON.parse(atob(encodeURIComponent(tokenJWT).split(".")[1]));
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

const logout = () => {
  window.location.href = "../login/index.html";
  localStorage.removeItem("token");
  localStorage.removeItem("info_user_login");
};

const fetchOneProfessor = () => {
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
      console.log(aluno.turma);
      buildTurmasCard(data.turma);
    });
};

const entrarTurma = () => {
  checkUser();
  let inputCodigo = document.querySelector("#codigo_turma");

  let form = {
    codigo: inputCodigo.value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(form),
  };

  fetch(uriCheckTurma, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (data.length === 1) {
        adicionarAluno(data[0].id_turma, aluno.id_aluno)
        window.location.reload();
      } else {
        alert("Hove um erro tentando entrar na turma");
      }
    });
};

const adicionarAluno = (id_turma, id_aluno) => {
  let form = {
    id_aluno: id_aluno,
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(form),
  };
  fetch(uriAddAluno + id_turma, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    });
};

const buildTurmasCard = (dados) => {
  dados.forEach((elemento) => {
    const divPai = document.createElement("div");
    const divHeader = document.createElement("div");
    const imgHeader = document.createElement("img");
    const divBody = document.createElement("div");

    const h1 = document.createElement("h1");

    divHeader.appendChild(imgHeader);
    divPai.appendChild(divHeader);
    divPai.appendChild(divBody);
    divBody.appendChild(h1);

    divPai.classList.add("turma_card");
    divHeader.classList.add("card_header");
    divBody.classList.add("card_body");
    imgHeader.classList.add("card_img");

    imgHeader.src = "../../Assets/icone.png";
    imgHeader.style.width = "100px";

    divPai.style.width = "24%";
    divPai.style.backgroundColor = "#FFFFFF";
    divPai.style.height = "170px";
    divPai.style.display = "flex";
    divPai.style.flexDirection = "column";
    divPai.style.cursor = "pointer";
    divPai.style.alignItems = "center";
    divPai.style.borderRadius = "12px";

    divBody.style.width = "100%";
    divBody.style.height = "230px";
    divBody.style.display = "flex";
    divBody.style.alignItems = "center";
    divBody.style.justifyContent = "center";
    divBody.style.backgroundColor = "#19dde0";
    divBody.style.borderRadius = "12px";
    divBody.style.padding = "12px";

    divHeader.style.height = "100px";
    h1.innerHTML = elemento.nome;

    divPai.addEventListener("click", function () {
      window.location.href = "../turmasHome/index.html";
    });

    document.querySelector(".content").appendChild(divPai);
  });
};

fetchOneProfessor();
checkUser();
