document.addEventListener("DOMContentLoaded", function() {
    function adjustNavbar() {
        const navbar = document.querySelector(".navbar");
        const profileBtn = document.getElementById("navbarProfileBtn");
        const cartBtn = document.getElementById("navbarCartBtn");
        const logoutBtn = document.getElementById("navbarLogout");
        const logo = document.getElementById("logo-cervejaria");
        const titulo = document.getElementById("titulo-cervejaria");
        
        if (window.innerWidth >= 410 && window.innerWidth <= 1024) {
            logo.classList.remove("ms-5", "mt-2"); // Remover classes de margem
            logo.style.width = "5rem";
            logo.style.height = "5rem";
            logo.style.margin = "0 auto";

            navbar.classList.add("navbar-responsive");
            profileBtn.classList.add("btn-responsive");
            cartBtn.classList.add("btn-responsive");
            logoutBtn.classList.add("btn-responsive");
            titulo.style.marginTop = "20px";
        } else {
            logo.classList.add("ms-5", "mt-2");
            logo.style.width = "";
            logo.style.height = "";
            logo.style.margin = "";

            navbar.classList.remove("navbar-responsive");
            profileBtn.classList.remove("btn-responsive");
            cartBtn.classList.remove("btn-responsive");
            logoutBtn.classList.remove("btn-responsive");
        }
    }

    // Ajustar a navbar ao carregar a página e ao redimensionar a janela
    adjustNavbar();
    window.addEventListener("resize", adjustNavbar);
});