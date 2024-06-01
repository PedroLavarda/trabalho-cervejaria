document.addEventListener('DOMContentLoaded', () => {
  const addToCartButton = document.getElementById('add-to-cart');
  const cart = document.getElementById('cart');
  const name = document.getElementById('name');
  const price = document.getElementById('price').innerText;
  const quantityInput = document.getElementById('quantity');

addToCartButton.addEventListener('click', () => {
      const quantity = parseInt(quantityInput.value);
      const total = (price * quantity).toFixed(2);

      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
          <p> Produto: ${name} </p>
          <p> Quantidade: ${quantity} </p>
          <p> Total: R$${total} </p>
      `;

      cart.innerHTML = '';
      cart.appendChild(cartItem);
  });
});