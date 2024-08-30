import { User } from "./userModel.js";

const cadastroForm = document.getElementById("cadastroForm");
const cadastroButton = document.getElementById("cadastroFormSubmit");

cadastroButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = cadastroForm.inputEmail.value;
  const password = cadastroForm.inputPassword.value;
  const cpf = cadastroForm.inputCpf.value;
  const birthDate = cadastroForm.inputBirthdate.value;
  const name = cadastroForm.inputName.value;

  if (email != "" && password != "" && cpf != "" &&  name != "") {
    const user = new User(name, email, password, cpf, birthDate);

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find(e => e.email === user.email || e.cpf === user.cpf);

    if (alreadyExists) {
        window.alert('Email já esta em uso.');
    } else {
        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "login.html";
    }
  } else {
    if (email === "") {
      cadastroForm.inputEmail.classList.add("border", "border-danger");
    } else {
      cadastroForm.inputEmail.classList.remove("border", "border-danger");
    }

    if (password === "") {
      cadastroForm.inputPassword.classList.add("border", "border-danger");
    } else {
      cadastroForm.inputPassword.classList.remove("border", "border-danger");
    }

    if (name === "") {
      cadastroForm.inputName.classList.add("border", "border-danger");
    } else {
      cadastroForm.inputName.classList.remove("border", "border-danger");
    }

    if (cpf === "") {
      cadastroForm.inputCpf.classList.add("border", "border-danger");
    } else {
      cadastroForm.inputCpf.classList.remove("border", "border-danger");
    }

    window.alert("Todos os campos obrigatórios (*) devem ser preenchidos.");
  }
});
