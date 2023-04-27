const uriGetTurma = "http://localhost:3000/turmas/readOne/";
const uriCreateAtividade = "http://localhost:3000/atividades/create";
const uriReadOneAtividade = "http://localhost:3000/atividades/readOne/";
const uriExcluirAtividade = "http://localhost:3000/atividades/excluir/";
const uriCompletarAtividade = "http://localhost:3000/atividades/concluir";
const uriEnviarArquivo = "http://localhost:3000/arquivos/enviar";
const uriAddPoints = "http://localhost:3000/pontos/addPoints/";
var textAreaLinks = [];
var dadosAtividade = [];
var dadosTurma = [];

const openModalAddAtividade = () => {
  document.querySelector(".back_modal").classList.remove("model");
  document.querySelector(".modalAddAtividade").classList.remove("model");
};

const closeModalAddAtividade = () => {
  document.querySelector(".back_modal").classList.add("model");
  document.querySelector(".modalAddAtividade").classList.add("model");
};

const openModalEntregarAtividade = () => {
  document.querySelector(".back_modal").classList.remove("model");
  document.querySelector(".modalEntregarAtividade").classList.remove("model");
};

const closeModalEntregarAtividade = () => {
  document.querySelector(".back_modal").classList.add("model");
  document.querySelector(".modalEntregarAtividade").classList.add("model");
};

const checkUser = () => {
  if (localStorage.getItem("token") !== null) {
    const tokenJWT = localStorage.getItem("token");
    const info = localStorage.getItem("info_user_login");

    let checkIfProfessor = JSON.parse(info);

    if (checkIfProfessor.id_prof) {
      document.querySelector("#btExcluiAtividade").classList.remove("model");
    } else {
      document.querySelector(".remove").classList.add("model");
      document.querySelector("#btEntregaAtividade").classList.remove("model");
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
      dadosTurma = data;
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

const adicionarAtividade = () => {
  let inpPrazo = document.querySelector("#inpData");
  let inpDescricao = document.querySelector("#textArea");
  let inpPontos = document.querySelector("#inpPontos");
  let inpTitle = document.querySelector("#inpTitle");

  inpPrazo = new Date();
  var offset = inpPrazo.getTimezoneOffset() / 60;
  var horas = inpPrazo.getHours() - offset;
  inpPrazo.setHours(horas);
  var dataFormatada = inpPrazo.toISOString();

  let form = {
    id_turma: dadosTurma.id_turma,
    titulo: inpTitle.value,
    descricao: inpDescricao.value,
    prazo: dataFormatada,
    pontos_conclusao: Number(inpPontos.value),
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(form),
  };

  fetch(uriCreateAtividade, options)
    .then((resp) => {
      return resp.status;
    })
    .then((data) => {
      if (data === 201) {
        window.location.reload();
      }
    });
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
    imgHeader.style.width = "90px";

    divPai.style.width = "100%";

    divPai.style.backgroundColor = "#FFFFFF";
    divPai.style.height = "100px";
    divPai.style.display = "flex";
    divPai.style.cursor = "pointer";
    divPai.style.alignItems = "center";
    divPai.style.borderRadius = "12px";
    divPai.style.marginBottom = "12px";

    divBody.style.width = "100%";

    divBody.style.display = "flex";
    divBody.style.height = "100%";
    divBody.style.alignItems = "center";
    divBody.style.justifyContent = "center";
    divBody.style.backgroundColor = "#19dde0";
    divBody.style.borderRadius = "12px";
    divBody.style.padding = "12px";

    divHeader.style.height = "100px";
    h1.innerHTML = elemento.titulo;
    divPai.setAttribute("id", elemento.id_atividade);

    divPai.addEventListener("click", (event) => {
      document.querySelector(".atividadeInfo").classList.remove("model");
      const idDoCard = event.target.closest(".turma_card").id;
      fetchOneAtividade(idDoCard);
    });

    document.querySelector("#atividades").appendChild(divPai);
  });
};

const fetchOneAtividade = (id) => {
  const options = {
    method: "GET",
  };
  fetch(uriReadOneAtividade + id, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      dadosAtividade = data;
      preencherInfoAtividade(data);
    });
};

const preencherInfoAtividade = (dados) => {
  const descricaoComLinks = dados.descricao;
  const links =
    descricaoComLinks.match(/(https?:\/\/[^\s]+)|(ftp:\/\/[^\s]+)/g) || [];
  const descricaoSemLinks = descricaoComLinks.replace(
    /(https?:\/\/[^\s]+)|(ftp:\/\/[^\s]+)/g,
    ""
  );

  document.querySelector("#descricaoAtividade").innerHTML = descricaoSemLinks;
  document.querySelector("#nomeAtividade").innerHTML = dados.titulo;
  document.querySelector("#pontos_conclusao").innerHTML =
    +" " + dados.pontos_conclusao;

  const imagens = links.map(async (link) => {
    const response = await fetch(
      `https://api.apiflash.com/v1/urltoimage?access_key=5c38e433a59b42b0aac2052e7959a67b&url=${link}&format=png&width=500&height=500 `
    );
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  });

  Promise.all(imagens).then((urlImagens) => {
    urlImagens.forEach((urlImagem, index) => {
      const img = document.createElement("img");
      img.src = urlImagem;
      img.alt = `Imagem ${index + 1}`;

      const div = document.createElement("div");
      const p = document.createElement("p");
      p.innerHTML = `<a href="${links[index]}">${links[index]}</a>`;
      div.setAttribute("class", "divLink");
      div.appendChild(img);
      div.appendChild(p);

      document.querySelector(`#links`).appendChild(div);
    });
  });

  document.querySelector(`#links`).innerHTML = "";
  document.querySelector(`#links`);

  document.querySelector("#descricaoAtividade").innerHTML = descricaoSemLinks;
  document.querySelector("#nomeAtividade").innerHTML = dados.titulo;

  console.log(links);
};

const excluirAtividade = () => {
  let id = dadosAtividade.id_atividade;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  fetch(uriExcluirAtividade + Number(id), options)
    .then((response) => {
      return response.status;
    })
    .then((data) => {
      if (data === 204) {
        window.location.reload();
      } else {
        alert("Ocorreu um erro");
        console.log(data);
      }
    });
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

const formatDate = (data) => {
  data = new Date();

  var offset = data.getTimezoneOffset() / 60;
  var horas = data.getHours() - offset;

  data.setHours(horas);

  var dataFormatada = data.toISOString();

  return dataFormatada;
};

const entregarAtividade = async () => {
  let idAluno = JSON.parse(localStorage.getItem("info_user_login"));
  let inpArquivo = document.querySelector("#inpArquivo");

  let fileName = generateRandomString() + "_" + inpArquivo.value.split("\\")[2];
  let file = inpArquivo.files[0];
  let fileWithNewName = new File([file], fileName, { type: file.type });

  let form = {
    id_atividade: dadosAtividade.id_atividade,
    id_aluno: idAluno.id_aluno,
    data_concluida: formatDate(new Date()),
    arquivo: fileName,
  };

  const optionsCompletar = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(form),
  };

  try {
    const completar = await fetch(uriCompletarAtividade, optionsCompletar).then(
      (resp) => {
        return resp.json();
      }
    );
    atribuirPontos(idAluno.id_aluno);
    if (inpArquivo.value !== "") {
      const formData = new FormData();
      formData.append("img", fileWithNewName);
      const optionsEnviarArquivo = {
        method: "POST",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: formData,
      };
      const arquivo = await fetch(uriEnviarArquivo, optionsEnviarArquivo).then(
        (resp) => {
          return resp.status;
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
};

const atribuirPontos = (id) => {
  const options = {
    method: "POST",
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: {
      qtd: dadosAtividade.pontos_conclusao,
    },
  };

  fetch(uriAddPoints + id, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    });
};
fetchAtividades();
