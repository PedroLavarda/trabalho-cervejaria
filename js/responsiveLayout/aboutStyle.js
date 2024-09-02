if (window.innerWidth < 1024) {
  const textoGeral = document.getElementById("texto-geral");
  textoGeral.classList.remove("flex-row");
  textoGeral.classList.add("flex-column");

  const titulo = document.getElementById("titulo");
  titulo.classList.remove("pt-2");
  titulo.classList.add("pt-5");
  titulo.classList.add("mt-3");
}