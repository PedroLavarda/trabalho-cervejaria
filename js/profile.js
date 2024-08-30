const userInfo = document.getElementById('userInfo');
const user = JSON.parse(localStorage.getItem('activeUser'));

const email = document.createElement('p');
email.textContent = 'Email: ' + user.email;
email.classList.add("h5");

const uname = document.createElement('p');
uname.textContent = 'Nome do usuario: ' + user.name;
uname.classList.add("h5");

const birthDate = document.createElement('p');
birthDate.textContent = 'Data de nascimento: ' + user.birthDate;
birthDate.classList.add("h5");

const cpf = document.createElement('p');
cpf.textContent = 'CPF: ' + user.cpf;
cpf.classList.add("h5");

userInfo.appendChild(email);
userInfo.appendChild(uname);
userInfo.appendChild(birthDate);
userInfo.appendChild(cpf);