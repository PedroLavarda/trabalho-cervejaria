const payment = document.getElementById("payment");
const cartData = JSON.parse(localStorage.getItem("cartData"));
let totalInCart = 0;

if (cartData != null) {
    const pagamentoDiv = document.createElement("div");
    pagamentoDiv.classList.add("border");
    pagamentoDiv.style.padding = "10px";
    pagamentoDiv.style.paddingTop = "30px";
    pagamentoDiv.style.paddingBottom = "30px";
    pagamentoDiv.style.paddingRight = "30px";

    cartData.forEach(product => {
        const itensDiv = document.createElement("div");
        itensDiv.classList.add("d-flex");
        itensDiv.classList.add("flex-column");
        itensDiv.classList.add("justify-content-center");
        itensDiv.style.marginLeft = "2rem";
        itensDiv.style.marginBottom = "5px";

        const itemNamePrice = document.createElement("h5");
        itemNamePrice.innerHTML = "• "+product.name+" - R$"+product.price;

        itensDiv.appendChild(itemNamePrice);
        pagamentoDiv.appendChild(itensDiv);

        totalInCart += product.price;
    });

    const totalPrice = document.createElement("div");
    totalPrice.classList.add("mt-4");

    const price = document.createElement("h5");
    price.innerHTML = "Preço total: R$ " + totalInCart;
    price.classList.add("h5");
    price.style.marginLeft = "2rem";

    totalPrice.appendChild(price);
    pagamentoDiv.appendChild(totalPrice);
    payment.appendChild(pagamentoDiv);
}

const proceedWithPayment = document.getElementById("btnConcluirPagamento");
proceedWithPayment.style.marginTop = "1rem";
proceedWithPayment.addEventListener("click", (e) => {
   e.preventDefault();

   if(localStorage.getItem("users") != null) {
       const toastTrigger = document.getElementById('btnFinalizarCompra');
       const toastLiveExample = document.getElementById('liveToast');
       if (toastTrigger) {
           toastTrigger.addEventListener('click', () => {
               const toast = new bootstrap.Toast(toastLiveExample)
               toast.show()
           })
       }
   }

    localStorage.removeItem("cartData");
    window.location.reload();
});
