const label = document.getElementById("label");
const shoppingCart = document.getElementById("shopping-cart");
let cart = JSON.parse(localStorage.getItem("cartData")) || [];

function cartCounter() {
  document.getElementById("cart-counter").innerHTML =
    // Get the sum of all items quantity.
    cart.map((item) => item.itemQuantity).reduce((sum, qty) => sum + qty, 0);
}

cartCounter();

function renderCartItems() {
  if (cart.length !== 0) {
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
        <button class="home-btn">Back to home</button>
        </a>
        `;
  }
}

renderCartItems();
