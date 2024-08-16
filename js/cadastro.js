import { User } from "./userModel.js";

const cadastroForm = document.getElementById("cadastroForm");
const cadastroButton = document.getElementById("cadastroFormSubmit");

cadastroButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = cadastroForm.inputEmail.value;
    const password = cadastroForm.inputPassword.value;

    const user = new User(email, password);

    const users = JSON.parse(localStorage.getItem("users")) || []

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "login.html";
});