const uriCadastroAluno = "http://localhost:3000/alunos/create"
const uriCadastroProf = "http://localhost:3000/professores/create"

const cadastrar = () => {
  let uri = ""

  let inpEmail = document.querySelector("#email")
  let inpSenha = document.querySelector("#senha")
  let inpNome = document.querySelector("#nome")

  let radioAluno = document.querySelector("#student")

  let form = {
    nome: inpNome.value,
    email: inpEmail.value,
    senha: inpSenha.value,
  }

  if (radioAluno.checked) {
    uri = uriCadastroAluno
  } else {
    uri = uriCadastroProf
  }

  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }
  fetch(uri, options)
    .then((resp) => {
      return resp.status
    })
    .then((data) => {
      console.log(data);
      if (data === 201) {
       window.location.href = "../login/index.html"
      } else {
        alert(data.msg)
      }
    })
}
