const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginFormSubmit");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = loginForm.inputEmail.value;
  const password = loginForm.inputPassword.value;

  const users = JSON.parse(localStorage.getItem("users"));
 
  if(email != '' && password != '') {
    for (let i = 0; i < users.length; i++) {
      if (email === users.at(i).email && password === users.at(i).password) {
        localStorage.setItem("activeUser", JSON.stringify(users.at(i)));
        window.location.href = "index.html";
      } else {
        window.alert("Email ou senha incorretos");

        loginForm.inputEmail.classList.remove('border', 'border-danger');
        loginForm.inputPassword.classList.remove('border', 'border-danger');
      }
    }
  } else {
    if(email === '') {
      loginForm.inputEmail.classList.add('border', 'border-danger');
    } else {
      loginForm.inputEmail.classList.remove('border', 'border-danger');
    }

    if(password === '') {
      loginForm.inputPassword.classList.add('border', 'border-danger');
    } else {
      loginForm.inputPassword.classList.remove('border', 'border-danger');
    }

    window.alert('Email e senha devem ser preenchidos.');
  }

  
});