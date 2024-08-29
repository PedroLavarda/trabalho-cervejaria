import { navbarComponent } from "./components/navbar.js";
import { footerComponent } from "./components/footer.js";

document.getElementById("navbar").innerHTML = navbarComponent;
document.getElementById("footer").innerHTML = footerComponent;

const cartBtn = document.getElementById("navbarCartBtn");

cartBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('activeUser'));

    if (user === null) {
        window.alert("Usuario deve estar logado para acessar o carrinho.");
        window.location.href = "login.html";
    } 

    window.location.href = "cart.html";
})