const userInfo = document.getElementById('userInfo');
const user = JSON.parse(localStorage.getItem('activeUser'));

const email = document.createElement('p');
email.textContent = 'Email: ' + user.email;
email.classList.add("h5");

const password = document.createElement('p');
password.textContent = 'Password: ' + user.password;
password.classList.add("h5");

userInfo.appendChild(email);
userInfo.appendChild(password);