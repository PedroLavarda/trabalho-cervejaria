const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginFormSubmit");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = loginForm.inputEmail.value;
  const password = loginForm.inputPassword.value;

  const users = JSON.parse(localStorage.getItem("users"));

  for (let i = 0; i < users.length; i++) {
    if (email === users.at(i).email && password === users.at(i).password) {
      window.location.href = "index.html";
    } else {
      window.alert("Conta não existente");
    }
  }
});