const uriReadAtividadesConcluidas = "http://localhost:3000/atividades/viewAtividades"
const uriAddPoints = "http://localhost:3000/pontos/addPoints/"

var dadosConcluidas = []
var infoAtividade = []
var dadosInfoAtividade = []


const voltar = () => {
  window.location.href = "../professoresHome/index.html"
}

const fetchAtividadesConcluidas = () => {
  const options = {
    method: "GET"
  }
  fetch(uriReadAtividadesConcluidas, options)
    .then(resp => { return resp.json() })
    .then(data => {
      data.forEach(dado => {
        console.log(dado);
        infoAtividade = dado.atividades_concluidas
      });
      dadosConcluidas = data
      buildAtividadesCard(data)
    })
}

const buildAtividadesCard = (dados) => {
  dados.forEach((elemento) => {
    const divPai = document.createElement("div")
    const divHeader = document.createElement("div")
    const imgHeader = document.createElement("img")
    const divBody = document.createElement("div")

    const h1Title = document.createElement("h1")
    const h1NomeTurma = document.createElement("h1")
    const h1NomeAluno = document.createElement("h1")

    divHeader.appendChild(imgHeader)
    divPai.appendChild(divHeader)
    divPai.appendChild(divBody)
    divBody.appendChild(h1Title)
    divBody.appendChild(h1NomeTurma)
    divBody.appendChild(h1NomeAluno)

    divPai.classList.add("atividade_card")
    divHeader.classList.add("card_header")
    divBody.classList.add("card_body")
    imgHeader.classList.add("card_img")

    imgHeader.src = "../../Assets/icone.png"
    imgHeader.style.width = "90px"

    divPai.style.width = "100%"

    divPai.style.backgroundColor = "#FFFFFF"
    divPai.style.height = "100px"
    divPai.style.display = "flex"
    divPai.style.cursor = "pointer"
    divPai.style.alignItems = "center"
    divPai.style.borderRadius = "12px"
    divPai.style.marginBottom = "12px"

    divBody.style.width = "100%"

    divBody.style.display = "flex"
    divBody.style.height = "100%"
    divBody.style.alignItems = "center"
    divBody.style.justifyContent = "center"
    divBody.style.backgroundColor = "#19dde0"
    divBody.style.borderRadius = "12px"
    divBody.style.padding = "12px"

    divHeader.style.height = "100px"
    divHeader.style.display = "flex"
    divHeader.style.alignItems = "center"
    divHeader.style.justifyContent = "center"

    h1Title.innerHTML = elemento.titulo + " - "
    h1NomeTurma.innerHTML = " - " + elemento.turma.nome
    divPai.setAttribute("id", elemento.id_turma)

    divPai.addEventListener("click", (event) => {
      document.querySelector(".atividadeInfo").classList.remove("model")
      dadosInfoAtividade = elemento.atividades_concluidas
      preencherInfoAtividade()
    })

    document.querySelector("#atividadesConcluidas").appendChild(divPai)

  })
}

const criarCardPai = () => {
  const divPai = document.createElement("div");
  divPai.classList.add("atividade_card");
  divPai.style.width = "90%";
  divPai.style.backgroundColor = "#FFFFFF";
  divPai.style.height = "80px";
  divPai.style.display = "flex";
  divPai.style.alignItems = "center";
  divPai.style.borderRadius = "12px";
  divPai.style.marginBottom = "12px";
  divPai.style.position = "relative";
  return divPai;
};

const criarCardHeader = () => {
  const divHeader = document.createElement("div");
  divHeader.classList.add("card_header");
  divHeader.style.height = "100px";
  divHeader.style.display = "flex";
  divHeader.style.alignItems = "center";
  divHeader.style.justifyContent = "center";
  return divHeader;
};

const criarCardImagem = () => {
  const imgHeader = document.createElement("img");
  imgHeader.classList.add("card_img");
  imgHeader.src = "../../Assets/icone.png";
  imgHeader.style.width = "90px";
  return imgHeader;
};

const criarCardBody = () => {
  const divBody = document.createElement("div");
  divBody.classList.add("card_body");
  divBody.style.width = "100%";
  divBody.style.display = "flex";
  divBody.style.height = "100%";
  divBody.style.alignItems = "center";
  divBody.style.justifyContent = "center";
  divBody.style.backgroundColor = "#19dde0";
  divBody.style.borderRadius = "12px";
  divBody.style.padding = "12px";
  divBody.style.gap = "12px";
  return divBody;
};

const criarNomeAluno = (nome) => {
  const h1NomeAluno = document.createElement("h1");
  h1NomeAluno.textContent = nome;
  return h1NomeAluno;
};

const criarBotaoVerArquivo = (arquivo) => {
  const buttonVerArquivo = document.createElement("button");
  buttonVerArquivo.classList.add("botao-info");
  buttonVerArquivo.textContent = "Baixar Arquivo";
  buttonVerArquivo.addEventListener("click", function () {
    const azureUrl = `https://classquest.blob.core.windows.net/data/${arquivo}`;
    window.open(azureUrl, "_blank");
  });
  return buttonVerArquivo;
};

const criarBotaoAtribuirPontos = (idAluno, idTurma) => {
  idTurma = document.querySelector(".atividade_card").id
  const buttonAtribuirPontos = document.createElement("button");
  buttonAtribuirPontos.classList.add("botao-info");
  buttonAtribuirPontos.textContent = "Atribuir Pontos";

  console.log(idAluno);
  console.log(idTurma);

  const abrirDialog = () => {
    dialog.showModal();
  };

  const fecharDialog = () => {
    dialog.close();
  };

  buttonAtribuirPontos.addEventListener("click", abrirDialog);

  const dialog = document.createElement("dialog");
  const form = document.createElement("form");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const confirmButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  label.textContent = "Quantidade de Pontos:";
  input.type = "number";
  input.min = "0";
  input.required = true;
  confirmButton.textContent = "Confirmar";
  cancelButton.textContent = "Cancelar";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const quantidadePontos = input.value;

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        qtd: quantidadePontos,
      }),
    };

    fetch(uriAddPoints + idAluno + "/" + idTurma, options)
      .then(response => response.json())
      .then(data => {
        if (data.msg === "Pontos atribuídos") {
          alert("Pontos atribuídos com sucesso");
        } else {
          alert("Erro ao atribuir pontos");
          console.log(data);
        }
      })
      .catch(error => {
        console.error("Erro ao atribuir pontos:", error);
      });

    fecharDialog();
  });

  cancelButton.addEventListener("click", fecharDialog);

  dialog.appendChild(form);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(confirmButton);
  form.appendChild(cancelButton);

  document.body.appendChild(dialog);

  return buttonAtribuirPontos;
};

const preencherInfoAtividade = () => {
  const atividadeInfo = document.querySelector(".atividadeInfo");
  atividadeInfo.innerHTML = "";

  const h1NomeAtividade = document.createElement("h1");
  h1NomeAtividade.textContent = "Alunos que concluiram";
  atividadeInfo.appendChild(h1NomeAtividade);

  dadosInfoAtividade.forEach(dado => {
    const divPai = criarCardPai();
    const divHeader = criarCardHeader();
    const imgHeader = criarCardImagem();
    const divBody = criarCardBody();
    const h1NomeAluno = criarNomeAluno(dado.aluno.nome);
    const buttonVerArquivo = criarBotaoVerArquivo(dado.arquivo);
    const buttonAtribuirPontos = criarBotaoAtribuirPontos(dado.id_aluno, dado.id_turma);

    divHeader.appendChild(imgHeader);
    divPai.appendChild(divHeader);
    divPai.appendChild(divBody);
    divBody.appendChild(h1NomeAluno);
    divBody.appendChild(buttonVerArquivo);
    divBody.appendChild(buttonAtribuirPontos);

    divPai.setAttribute("id", dado.id_aluno);
    atividadeInfo.appendChild(divPai);
  });
};

fetchAtividadesConcluidas()