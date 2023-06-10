const uriGetTurma = "http://localhost:3000/turmas/readOne/";
const uriCreateAtividade = "http://localhost:3000/atividades/create";
const uriReadOneAtividade = "http://localhost:3000/atividades/readOne/";
const uriExcluirAtividade = "http://localhost:3000/atividades/excluir/";
const uriCompletarAtividade = "http://localhost:3000/atividades/concluir";
const uriCompletarAtividadeNovamente =
  "http://localhost:3000/atividades/concluirNovamente";
const uriEnviarArquivo = "http://localhost:3000/arquivos/enviar";
const uriAddPoints = "http://localhost:3000/pontos/addPoints/";
const uriExcluirTurma = "http://localhost:3000/turmas/delete/";
const uriGetPremios = "http://localhost:3000/premios/readOne/";
const uriExcluirPremio = "http://localhost:3000/premios/excluir/";
const uriCriarPremio = "http://localhost:3000/premios/create";
const uriGetPontosAluno = "http://localhost:3000/alunos/readPontos/";
const uriRemovePoints = "http://localhost:3000/pontos/removePoints/";

var textAreaLinks = [];
var dadosAtividade = [];
var dadosTurma = [];

var info_user_login = JSON.parse(localStorage.getItem("info_user_login"));
console.log(info_user_login);

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

const openPremios = () => {
  document.querySelector(".premios").classList.remove("model");
  document.querySelector(".atividades").classList.add("model");
  document.querySelector(".atividadeInfo").classList.add("model");
};

const closePremios = () => {
  document.querySelector(".premios").classList.add("model");
  document.querySelector(".atividades").classList.remove("model");
};

const openModalAddPremio = () => {
  document.querySelector(".back_modal").classList.remove("model");
  document.querySelector(".modalCadastrarPremio").classList.remove("model");
};
const closeModalAddPremio = () => {
  document.querySelector(".back_modal").classList.add("model");
  document.querySelector(".modalCadastrarPremio").classList.add("model");
};

const checkUser = () => {
  if (localStorage.getItem("token") !== null) {
    const tokenJWT = localStorage.getItem("token");
    const info = localStorage.getItem("info_user_login");

    let checkIfProfessor = JSON.parse(info);

    if (checkIfProfessor.id_prof) {
      document.querySelector("#btExcluiAtividade").classList.remove("model");
      document.querySelector("#btCorrigirAtividade").classList.remove("model");
      document.querySelector(".hideBtExcluir").classList.remove("model");
    } else {
      document.querySelector(".remove").classList.add("model");
      document.querySelector(".btPremio").classList.add("model");
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

    document.querySelector(".atividades").appendChild(divPai);
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
      converterMarkdown();
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

  document.querySelector("#descricaoAtividade").innerHTML = descricaoSemLinks;
  document.querySelector("#nomeAtividade").innerHTML = dados.titulo;
};

const fetchPontosALuno = () => {
  let idAluno = info_user_login.id_aluno;
  let idTurma = localStorage.getItem("id_turma");

  const options = {
    method: "GET",
  };

  fetch(uriGetPontosAluno + idAluno + "/" + idTurma, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      document.querySelector(".pontosAluno").innerHTML += " " + data[0].qtd;
    });
};

const resgatarPremio = (qtd) => {
  let idAluno = info_user_login.id_aluno;
  let idTurma = localStorage.getItem("id_turma");

  let form = {
    qtdRemove: qtd,
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(form),
  };

  fetch(uriRemovePoints + idAluno + "/" + idTurma, options)
    .then((resp) => {
      return resp.status;
    })
    .then((data) => {
      if (data === 200) {
        alert("Premio Resgatado");
      } else if (data === 400) {
        alert("Você não tem pontos suficientes para resgatar este premio");
      }
    });
};

const fetchPremios = () => {
  const idTurma = localStorage.getItem("id_turma");
  const options = {
    method: "GET",
  };
  fetch(uriGetPremios + idTurma, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      buildPremiosCard(data);
    });
};

const buildPremiosCard = (dados) => {
  const premiosContainer = document.querySelector(".premioContent");

  dados.forEach((elemento) => {
    const divPai = document.createElement("div");
    const divHeader = document.createElement("div");
    const imgHeader = document.createElement("img");
    const divBody = document.createElement("div");

    const h1 = document.createElement("h2");
    const pontosRequeridos = document.createElement("p");
    const buttonResgatar = document.createElement("button");
    const buttonExcluir = document.createElement("button");

    divHeader.appendChild(imgHeader);
    divPai.appendChild(divHeader);
    divPai.appendChild(divBody);
    divBody.appendChild(h1);
    divBody.appendChild(buttonResgatar);
    divBody.appendChild(buttonExcluir);
    divBody.appendChild(pontosRequeridos);

    buttonResgatar.style.display = info_user_login.id_prof ? "none" : "block";
    buttonExcluir.style.display = info_user_login.id_prof ? "block" : "none";

    divPai.classList.add("turma_card");
    divHeader.classList.add("card_header");
    divBody.classList.add("card_body");
    imgHeader.classList.add("card_img");

    imgHeader.src = "../../Assets/icone.png";
    imgHeader.style.width = "90px";

    h1.innerHTML = elemento.descricao;
    divPai.setAttribute("id", elemento.id_premio);

    pontosRequeridos.innerHTML = `Pts. ${elemento.pontos_requeridos}`;

    buttonResgatar.innerHTML = "Resgatar Prêmio";
    buttonResgatar.classList.add("resgatar-btn");
    buttonResgatar.addEventListener("click", (event) => {
      const idDoPremio = event.target.closest(".turma_card").id;
      resgatarPremio(elemento.pontos_requeridos);
    });

    buttonExcluir.innerHTML = "Excluir Prêmio";
    buttonExcluir.classList.add("excluir-btn");
    buttonExcluir.addEventListener("click", (event) => {
      const idDoPremio = event.target.closest(".turma_card").id;
      excluirPremio(idDoPremio);
    });

    premiosContainer.appendChild(divPai);
  });
};

const excluirPremio = (idPremio) => {
  const confirmacao = window.confirm(
    "Tem certeza de que deseja excluir este prêmio?"
  );

  if (confirmacao) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    fetch(uriExcluirPremio + idPremio, options)
      .then((response) => {
        if (response.ok) {
          window.location.reload();
        } else {
          alert(`Erro ao excluir o prêmio com ID ${idPremio}.`);
        }
      })
      .catch((error) => {
        alert(`Erro na requisição ao excluir o prêmio: ${error}`);
      });
  }
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

function removerAcento(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function converterMarkdown() {
  var markdownContent = document.getElementById("descricaoAtividade").innerHTML;
  var md = window.markdownit();
  var htmlContent = md.render(markdownContent);
  document.getElementById("descricaoAtividade").innerHTML = htmlContent;
}

const concluirAtividade = async (form) => {
  const optionsCompletar = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(form),
  };

  try {
    const completar = await fetch(uriCompletarAtividade, optionsCompletar);
    const response = await completar.json();

    if (completar.ok) {
      return response;
    } else if (completar.status === 400) {
      const { error } = response;
      const userResponse = confirm(`${error} Deseja enviar novamente?`);

      if (userResponse) {
        const enviarAtividadeResponse = await enviarAtividade(form);

        if (enviarAtividadeResponse !== null) {
          alert("Atividade enviada novamente com sucesso!");
        } else {
          alert(
            "Ocorreu um erro ao enviar a atividade novamente. Por favor, tente novamente mais tarde."
          );
        }
      } else {
        console.log("Envio novamente cancelado pelo usuário");
        return null;
      }
    } else {
      console.error("Erro ao concluir a atividade:", response);
      return null;
    }
  } catch (err) {
    console.error("Erro ao concluir a atividade:", err);
    return null;
  }
};

const enviarArquivo = async (fileWithNewName) => {
  const formData = new FormData();
  formData.append("file", fileWithNewName);

  const optionsEnviarArquivo = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: formData,
  };
  const arquivo = await fetch(
    "http://localhost:3000/arquivos/enviar",
    optionsEnviarArquivo
  );
  const arquivoResponse = await arquivo.status;

  if (arquivo.ok) {
    return arquivoResponse;
  } else {
    console.log("Erro ao enviar arquivo:", arquivoResponse);
    return null;
  }
};

const enviarAtividade = async (form) => {
  const optionsCompletar = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(form),
  };

  try {
    const completar = await fetch(
      uriCompletarAtividadeNovamente,
      optionsCompletar
    );
    if (completar.ok) {
      const resposta = await completar.json();
      return resposta;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const entregarAtividade = async () => {
  const idAluno = JSON.parse(localStorage.getItem("info_user_login"));
  const inpArquivo = document.querySelector("#inpArquivo");

  const fileName =
    generateRandomString() + "_" + inpArquivo.value.split("\\")[2];
  const file = inpArquivo.files[0];
  const fileWithNewName = new File([file], removerAcento(fileName), {
    type: file.type,
  });

  const form = {
    id_atividade: dadosAtividade.id_atividade,
    id_aluno: idAluno.id_aluno,
    data_concluida: formatDate(new Date()),
    arquivo: removerAcento(fileName),
  };

  const completarResponse = await concluirAtividade(form);

  if (completarResponse !== null) {
    if (inpArquivo.value !== "") {
      const enviarArquivoResponse = await enviarArquivo(fileWithNewName);
      if (enviarArquivoResponse === 200) {
        alert("Arquivo enviado com sucesso!");
      } else {
        alert(
          "Ocorreu um erro ao enviar o arquivo. Por favor, tente novamente mais tarde."
        );
      }
    }
  }
};

const corrigirAtividade = () => {
  window.location.href = "../corrigirAtividade/index.html";
};

const excluirTurma = () => {
  if (confirm("Tem certaza de que deseja excluir a turma?")) {
    let id = localStorage.getItem("id_turma");
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    fetch(uriExcluirTurma + id, options)
      .then((resp) => {
        return resp.status;
      })
      .then((data) => {
        console.log(data);
        if (data === 204)
          window.location.href = "../professoresHome/index.html";
      });
  }
};

const criarPremio = () => {
  const id = localStorage.getItem("id_turma");
  let inpPontosRequeridos = document.querySelector("#inpPontosPremio");
  let textAreaPremio = document.querySelector("#inpPremioDesc");

  var form = {
    id_turma: Number(id),
    descricao: textAreaPremio.value,
    pontos_requeridos: Number(inpPontosRequeridos.value),
  };

  console.log(form);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(form),
  };

  fetch(uriCriarPremio, options)
    .then((resp) => {
      return resp.status;
    })
    .then((data) => {
      if (data === 201) {
        window.location.reload();
      } else {
        alert("Ocorreu um erro tente novamente mais tarde");
      }
    });
};

fetchAtividades();
fetchPontosALuno();
fetchPremios();
