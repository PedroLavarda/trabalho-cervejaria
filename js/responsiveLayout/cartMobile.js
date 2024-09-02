const cart = document.getElementById("cart");
const cartData = JSON.parse(localStorage.getItem("cartData"));
let totalInCart = 0;

if (window.innerWidth < 1024) {
    if (cartData != null) {
        cartData.forEach(product => {
            const separate = document.createElement("div");
            separate.classList.add("d-flex", "flex-row", "w-80");

            const opt = document.createElement("div");
            opt.classList.add("d-flex", "w-30", "justify-content-end", "align-items-center");

            const addQty = document.createElement("input");
            addQty.type = "number";
            addQty.classList.add("text-center", "w-30", "h-25", "me-3");
            addQty.min = 1;
            addQty.value = product.quantity;
            addQty.setAttribute("data-id", product.id);
            addQty.addEventListener("change", (e) => {
                e.preventDefault();
                product.quantity = addQty.value;
                localStorage.setItem("cartData", JSON.stringify(cartData));
            });

            const delP = document.createElement("i");
            delP.classList.add("me-3", "bi", "bi-trash-fill", "h5", "mt-2");
            delP.setAttribute("data-id", product.id);
            delP.addEventListener("click", (e) => {
                e.preventDefault();
                deleteFromCart(e);
            });

            delP.addEventListener("mouseover", (e) => {
                e.preventDefault();
                delP.classList.add("hover");
            })

            delP.addEventListener("mouseleave", (e) => {
                e.preventDefault();
                delP.classList.remove("hover");
            })

            opt.appendChild(delP);
            opt.appendChild(addQty);

            const itemDiv = document.createElement("div");
            itemDiv.classList.add("d-flex", "justify-content-between", "w-100", "border");

            const textDiv = document.createElement("div");
            textDiv.classList.add("d-flex", "flex-column", "justify-content-center", "ms-4", "w-50");

            const itemImg = document.createElement("img");
            itemImg.src = product.image;
            itemImg.classList.add("img-fluid", "ms-2", "cart-img");
            itemImg.style.width = "5rem";
            itemImg.style.height = "5rem";

            const itemName = document.createElement("h5");
            itemName.innerHTML = product.name;
            itemName.style.fontSize = "smaller";

            const itemPrice = document.createElement("h5");
            itemPrice.innerHTML = "R$" + product.price;
            itemPrice.style.fontSize = "smaller";

            textDiv.appendChild(itemName);
            textDiv.appendChild(itemPrice);

            separate.appendChild(itemImg);
            separate.appendChild(textDiv);

            itemDiv.appendChild(separate);
            itemDiv.appendChild(opt);
            totalInCart += product.price * product.quantity;
            cart.appendChild(itemDiv);
        });

        const totalPrice = document.createElement("div");
        totalPrice.classList.add("mt-4");
        const price = document.createElement("h5");
        price.innerHTML = "Preço total: R$ " + totalInCart;
        price.classList.add("h5");

        totalPrice.appendChild(price);
        cart.appendChild(totalPrice);

        const botoes = document.getElementById("btnComprar");
        botoes.classList.remove("mt-4");
        botoes.classList.add("mt-2");
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
        const user = JSON.parse(localStorage.getItem("activeUser"));
        const cart = JSON.parse(localStorage.getItem('cartData'));

        if (cart === null || cart.length === 0) {
            window.alert('O carrinho está vazio !');
        } else if (user === null) {
            window.alert("Usuario deve estar logado para realizar uma compra.");
            window.location.href = 'login.html';
        } else {
            window.location.href = 'payment.html';
        }
    });

    const deleteFromCart = async (e) => {
        const id = e.target.getAttribute('data-id');
        const cart = JSON.parse(localStorage.getItem('cartData'));
        const arr = JSON.parse(localStorage.getItem("products"));
        const selected = arr.find(p => p.id === Number(id));

        if (selected) {
            const newCart = cart.filter(item => item.id !== selected.id);
            localStorage.setItem("cartData", JSON.stringify(newCart));
            alert('Produto removido');
            window.location.reload();
        }
    }
}