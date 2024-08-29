import { User } from "./userModel.js";

const cadastroForm = document.getElementById("cadastroForm");
const cadastroButton = document.getElementById("cadastroFormSubmit");

cadastroButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = cadastroForm.inputEmail.value;
  const password = cadastroForm.inputPassword.value;

  if (email != "" && password != "") {
    const user = new User(email, password);

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find(e => e.email = user.email) || null;

    if (alreadyExists) {
        window.alert('Email ja esta em uso.');
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

    window.alert("Email e senha devem ser preenchidos.");
  }
});
