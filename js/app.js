import { navbarComponent } from "./components/navbar.js";
import { footerComponent } from "./components/footer.js";

document.getElementById("navbar").innerHTML = navbarComponent;
document.getElementById("footer").innerHTML = footerComponent;

const cartBtn = document.getElementById("navbarCartBtn");
const profileBtn = document.getElementById("navbarProfileBtn");
const navbarLogout = document.getElementById("navbarLogout");

navbarLogout.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.removeItem("activeUser");
    window.location.href = 'login.html';
});

profileBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('activeUser'));

    if (user === null) {
        window.alert("Usuario deve estar logado para acessar o perfil.");
        window.location.href = "login.html";
    } else {
        window.location.href = "profile.html";
    }
});

cartBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('activeUser'));

    if (user === null) {
        window.alert("Usuario deve estar logado para acessar o carrinho.");
        window.location.href = "login.html";
    } else {
        window.location.href = "cart.html";
    }
});