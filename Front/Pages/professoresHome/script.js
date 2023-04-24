const uriReadOneProf = "http://localhost:3000/professores/readOne/";
const uriCreateTurma = "http://localhost:3000/turmas/create";
const uriAddProf = "http://localhost:3000/turmas/adicionarProfessor/";

var dadosCard = [];

var professor = [];

const openModal = () => {
  document.querySelector(".back_modal").classList.remove("model");
};

const closeModal = () => {
  document.querySelector(".back_modal").classList.add("model");
};

const checkUser = () => {
  if (localStorage.getItem("token") !== null) {
    const tokenJWT = localStorage.getItem("token");
    const info = localStorage.getItem("info_user_login");

    let nome = JSON.parse(info).nome;

    document.querySelector(".nomeProfessor").innerHTML = nome;

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
      console.log(err);
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

  fetch(uriReadOneProf + id.id_prof, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      professor = data;
      buildTurmasCard(data.turma);
    });
};

const criarTurma = () => {
  checkUser();
  let inputNome = document.querySelector("#nome_turma");

  let form = {
    nome: inputNome.value,
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
        window.location.reload();
      } else {
        alert("Hove um erro na criação uma turma");
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
      localStorage.setItem("id_turma", elemento.id_turma);
      window.location.href = "../turmasHome/index.html";
    });

    document.querySelector(".content").appendChild(divPai);
  });
};

fetchOneProfessor();
checkUser();