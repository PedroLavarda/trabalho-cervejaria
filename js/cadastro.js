import { User } from "./userModel.js";

const cadastroForm = document.getElementById("cadastroForm");
const cadastroButton = document.getElementById("cadastroFormSubmit");

const users = [];

cadastroButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = cadastroForm.inputEmail.value;
    const password = cadastroForm.inputPassword.value;

    const newUser = new User(email, password);

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "login.html";
});