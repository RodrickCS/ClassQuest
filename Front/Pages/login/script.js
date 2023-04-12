const uriLoginAluno = "http://localhost:3000/alunos/login";
const uriLoginProf = "http://localhost:3000/professores/login";

const login = () => {
  let uri = "";

  let inpEmail = document.querySelector("#email");
  let inpSenha = document.querySelector("#senha");

  let radioAluno = document.querySelector("#student");

  let form = {
    email: inpEmail.value,
    senha: inpSenha.value,
  };

  if (radioAluno.checked) {
    uri = uriLoginAluno;
  } else {
    uri = uriLoginProf;
  }

  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  };
  fetch(uri, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (data.msg === "Login efetuado") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("info_user_login", JSON.stringify(data.info));
      } else {
        alert(data.msg);
        // openModal(data.msg)
      }
    });
};
