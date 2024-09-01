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

  cartData.forEach((product) => {
    const itensDiv = document.createElement("div");
    itensDiv.classList.add("d-flex");
    itensDiv.classList.add("flex-column");
    itensDiv.classList.add("justify-content-center");
    itensDiv.style.marginLeft = "2rem";
    itensDiv.style.marginBottom = "5px";

    const itemNamePrice = document.createElement("h5");
    itemNamePrice.innerHTML =
      "• " +
      product.name +
      " - R$" +
      product.price +
      " - Qtd: " +
      product.quantity;

    itensDiv.appendChild(itemNamePrice);
    pagamentoDiv.appendChild(itensDiv);

    totalInCart += product.price * product.quantity;
  });

  const totalPrice = document.createElement("div");
  totalPrice.classList.add("mt-4");

  const subprice = document.createElement("h6");
  subprice.innerHTML = "Subtotal: R$ " + totalInCart;
  subprice.style.marginLeft = "2rem";

  const discount = document.createElement("h6");
  discount.textContent = "Desconto total: 0";
  discount.style.marginLeft = "2rem";

  const frete = document.createElement("h6");
  frete.id = "frete";
  frete.textContent = "Frete: 0";
  frete.style.marginLeft = "2rem";

  const price = document.createElement("h5");
  price.innerHTML = "Preço total: R$ " + (totalInCart + 10);
  price.classList.add("h5");
  price.style.marginLeft = "2rem";

  totalPrice.appendChild(subprice);
  totalPrice.appendChild(discount);
  totalPrice.appendChild(frete);
  totalPrice.appendChild(price);
  pagamentoDiv.appendChild(totalPrice);
  payment.appendChild(pagamentoDiv);
}

const form = document.getElementById("frmPagamento");
const proceedWithPayment = document.getElementById("btnConcluirPagamento");
proceedWithPayment.style.marginTop = "1rem";
proceedWithPayment.addEventListener("click", (e) => {
  e.preventDefault();

  const cart = JSON.parse(localStorage.getItem("cartData"));

  if (cart.length === 0 || !cart) {
    window.alert("Carrinho está vazio, não é possivel continuar com o pagamento.");
    return;
  }

  if (!JSON.parse(localStorage.getItem("activeUser"))) {
    window.alert("Usuario não está logado.");
    return;
  }

  if(form.address.value != '' && form.phoneNumber.value != '' && form.cardNumber.value != '' && form.date.value
     != '' && form.cvv.value != '' && form.cep.value != '' && form.name.value != '') {
    window.alert("Pagamento conncluido");
    localStorage.setItem("cartData", JSON.stringify([]));
    const freteTxt = document.getElementById("frete");
    freteTxt.textContent = "Frete: R$ 0.00";
    window.location.reload();
  } else {
    if(form.address.value === '') {
      form.address.classList.add('border', 'border-danger');
    } else {
      form.address.classList.remove('border', 'border-danger');
    }
  
    if(form.phoneNumber.value === '') {
      form.phoneNumber.classList.add('border', 'border-danger');
    } else {
      form.phoneNumber.classList.remove('border', 'border-danger');
    }
  
    if(form.cep.value === '') {
      form.cep.classList.add('border', 'border-danger');
    } else {
      form.cep.classList.remove('border', 'border-danger');
    }
  
    if(form.cardNumber.value === '') {
      form.cardNumber.classList.add('border', 'border-danger');
    } else {
      form.cardNumber.classList.remove('border', 'border-danger');
    }
  
    if(form.date.value === '') {
      form.date.classList.add('border', 'border-danger');
    } else {
      form.date.classList.remove('border', 'border-danger');
    }
  
    if(form.cvv.value === '') {
      form.cvv.classList.add('border', 'border-danger');
    } else {
      form.cvv.classList.remove('border', 'border-danger');
    }

    window.alert("Preencha todos os campos obrigatórios (*) antes de concluir o pagamento!");
  }
});

const calculateFrete = document.getElementById("calculateFrete");
calculateFrete.addEventListener("click", (e) => {
  e.preventDefault();
  const cep = document.getElementById("frmPagamento").cep.value;

  if (cep === "") {
    window.alert("Preencher o cep para calcular o frete.");
    return;
  }

  const freteTxt = document.getElementById("frete");
  freteTxt.textContent = "Frete: R$ " + 10.00;
});

window.onload = (e) => {
  e.preventDefault();

  const activeUser = JSON.parse(localStorage.getItem("activeUser"));

  form.custname.value = activeUser.name;
  form.custname.disabled = true;
  form.cpf.value = activeUser.cpf;
  form.cpf.disabled = true;

  form.name.value = activeUser.name;
}