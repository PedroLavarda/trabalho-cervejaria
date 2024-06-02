const cart = document.getElementById("cart");
const cartData = JSON.parse(localStorage.getItem("cartData"));
let totalInCart = 0;

if (cartData != null) {
    cartData.forEach(product => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("d-flex");
        itemDiv.classList.add("border");

        const textDiv = document.createElement("div");
        textDiv.classList.add("d-flex");
        textDiv.classList.add("flex-column");
        textDiv.classList.add("justify-content-center");
        textDiv.classList.add("ms-5");

        const itemImg = document.createElement("img");
        itemImg.src = product.image;
        itemImg.classList.add("img-fluid");
        itemImg.classList.add("cart-img");

        const itemName = document.createElement("h5");
        itemName.innerHTML = product.name;

        const itemPrice = document.createElement("h5");
        itemPrice.innerHTML = "R$" + product.price;

        textDiv.appendChild(itemName);
        textDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(textDiv);

        totalInCart += product.price;
        cart.appendChild(itemDiv);
    });

    const totalPrice = document.createElement("div");
    totalPrice.classList.add("mt-4");
    const price = document.createElement("h5");
    price.innerHTML = "Preço total: " + totalInCart;
    price.classList.add("h5");

    totalPrice.appendChild(price);
    cart.appendChild(totalPrice);
} else {
    const emptyCart = document.createElement("p");
    emptyCart.classList.add("h5");
    emptyCart.innerHTML = "Seu carrinho está vazio!";
    cart.appendChild(emptyCart);
}

const limparCarrinho = document.getElementById("btnLimparCarrinho");

limparCarrinho.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("cartData");
    window.location.reload();
});

const proceedWithPayment = document.getElementById("btnFinalizarCompra");

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
});
