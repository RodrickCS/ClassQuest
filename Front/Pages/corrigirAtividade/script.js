const uriReadAtividadesConcluidas = "http://localhost:3000/atividades/viewAtividades"

var dadosConcluidas = []
var infoAtividade = []

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
      console.log(data);

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
    h1Title.innerHTML = elemento.titulo + " - "
    h1NomeTurma.innerHTML = " - " + elemento.turma.nome
    divPai.setAttribute("id", elemento.atividades_concluidas.id_atividade)

    divPai.addEventListener("click", (event) => {
      document.querySelector(".atividadeInfo").classList.remove("model")
      const idDoCard = event.target.closest(".atividade_card").id
      fetchOneAtividade(idDoCard)
    })

    document.querySelector("#atividadesConcluidas").appendChild(divPai)
  })
}

fetchAtividadesConcluidas()