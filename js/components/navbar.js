export const navbarComponent = 
    `
        <img class="img-fluid rounded img-logo ms-5 mt-2" src="assets/images/logo-cervejaria.png" alt="logo-cervejaria" id="logo-cervejaria">

        <div class="d-flex flex-column align-items-center justify-content-center">
            <h1 class="fw-bolder" id="titulo-cervejaria">Cervejaria Caneco Cheio</h1>
            <div class="d-flex flex-row mt-3 align-items-center justify-content-center">
                <button class="btn fw-bold" id="botao-home"><a class="text-dark text-decoration-none" href="index.html"> Home </a></button>
                <button class="btn fw-bold" id="botao-about"><a class="text-dark text-decoration-none" href="about.html"> Quem somos </a></button>
                <button id="navbarProfileBtn" class="btn fw-bold"> Perfil </button>
            </div>
        </div>

        <div class="d-flex flex-row me-5">
            <form class="d-flex">
                <div id="divPesquisar" class="input-group">
                    <span class="input-group-text bg-white">
                        <i class="bi bi-search" id="pesquisar-icon"></i>
                    </span>
                    <input class="form-control border rounded me-2" type="search" placeholder="Pesquisar" id="pesquisar">
                </div>
            </form>

            <button id="navbarCartBtn" class="ms-2 btn btn-dark text-white"><i id="icon-cart" class="bi bi-cart3 h5"></i></button>
            <button id="navbarLogout" class="ms-2 btn btn-danger text-white"><i id="icon-logout" class="bi bi-box-arrow-left h5"></i></button>
        </div>
    `