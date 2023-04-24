const uriGetTurma = "http://localhost:3000/turmas/readOne/";

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

    let checkIfProfessor = JSON.parse(info);

    if (checkIfProfessor.id_prof) {
      console.log("Checked");
    } else {
      let li = document.querySelector(".remove");
      li.remove();
    }

    try {
      const payload = JSON.parse(atob(tokenJWT.split(".")[1]));
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
checkUser();

const fetchAtividades = () => {
  let id = localStorage.getItem("id_turma");
  const options = {
    method: "GET",
  };
  fetch(uriGetTurma + id, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector("#codigoTurma").innerHTML += " " + data.codigo;
      buildAtividadesCard(data.atividades);
    });
};

const voltar = () => {
  let info = JSON.parse(localStorage.getItem("info_user_login"));
  if (info.id_prof) {
    window.location.href = "../professoresHome/index.html";
  } else {
    window.location.href = "../alunosHome/index.html";
  }
};

const buildAtividadesCard = (dados) => {
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

    divPai.style.width = "100%";

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
    h1.innerHTML = elemento.descricao;

    document.querySelector("#atividades").appendChild(divPai);
  });
};

fetchAtividades();
