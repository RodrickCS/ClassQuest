const uriReadOneProf = "http://localhost:3000/professores/readOne/";

var professor = [];

const voltar = () => {
  window.location.href = "../professoresHome/index.html";
};

const checkUser = () => {
  if (localStorage.getItem("token") !== null) {
    const tokenJWT = localStorage.getItem("token");
    const info = localStorage.getItem("info_user_login");

    let nome = JSON.parse(info).nome;

    document.querySelector(".nomeProfessor").innerHTML = nome;

    try {
      const payload = JSON.parse(
        atob(encodeURIComponent(tokenJWT).split(".")[1])
      );
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

const fetchOneProf = () => {
  let info = localStorage.getItem("info_user_login");

  let id = JSON.parse(info);
  console.log(info)

  const options = {
    method: "GET",
  };

  fetch(uriReadOneProf + id.id_prof, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      professor = data;
      preencherAccordionSuasTurmas(data.turma);
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


fetchOneProf();
checkUser()