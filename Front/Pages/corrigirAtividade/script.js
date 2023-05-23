const uriReadAtividadesConcluidas = "http://localhost:3000/atividades/viewAtividades"

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
    divPai.setAttribute("id", elemento.atividades_concluidas.id_atividade)

    divPai.addEventListener("click", (event) => {
      document.querySelector(".atividadeInfo").classList.remove("model")
      dadosInfoAtividade = elemento.atividades_concluidas
      preencherInfoAtividade()
    })

    document.querySelector("#atividadesConcluidas").appendChild(divPai)

  })
}

const preencherInfoAtividade = () => {
  document.querySelector(".atividadeInfo").innerHTML = ""
  const h1NomeAtividade = document.createElement("h1")

  h1NomeAtividade.innerHTML = "Alunos que concluiram"
  document.querySelector(".atividadeInfo").appendChild(h1NomeAtividade)

  dadosInfoAtividade.forEach(dado => {
    console.log(dado);
    const divPai = document.createElement("div")
    const divHeader = document.createElement("div")
    const imgHeader = document.createElement("img")
    const divBody = document.createElement("div")
    const buttonVerArquivo = document.createElement("button")

    const h1NomeAluno = document.createElement("h1")

    divHeader.appendChild(imgHeader)
    divPai.appendChild(divHeader)
    divPai.appendChild(divBody)
    divBody.appendChild(h1NomeAluno)
    divBody.appendChild(buttonVerArquivo)

    divPai.classList.add("atividade_card")
    divHeader.classList.add("card_header")
    divBody.classList.add("card_body")
    imgHeader.classList.add("card_img")

    imgHeader.src = "../../Assets/icone.png"
    imgHeader.style.width = "90px"

    divPai.style.width = "80%"

    divPai.style.backgroundColor = "#FFFFFF"
    divPai.style.height = "80px"
    divPai.style.display = "flex"
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
    divBody.style.gap = "12px"

    divHeader.style.height = "100px"
    divHeader.style.display = "flex"
    divHeader.style.alignItems = "center"
    divHeader.style.justifyContent = "center"

    buttonVerArquivo.style.padding = "8px 16px";
    buttonVerArquivo.style.backgroundColor = "#A0E8EC";
    buttonVerArquivo.style.color = "#000";
    buttonVerArquivo.style.border = "none";
    buttonVerArquivo.style.borderRadius = "4px";
    buttonVerArquivo.style.cursor = "pointer";

    h1NomeAluno.innerHTML = dado.aluno.nome
    buttonVerArquivo.innerHTML = "Baixar Arquivo"

    buttonVerArquivo.addEventListener("click", function () {
      const azureUrl = `https://classquest.blob.core.windows.net/data/${dado.arquivo}`;
      window.open(azureUrl, "_blank");
    });

    divPai.setAttribute("id", dado.id_atividade)

    document.querySelector(".atividadeInfo").appendChild(divPai)

  });

}

fetchAtividadesConcluidas()