// Model Section
const label = document.getElementById("label");
const shoppingCart = document.getElementById("shopping-cart");
let cart = JSON.parse(localStorage.getItem("cartData")) || [];
let totalAmmount;

function cartCounter() {
  document.getElementById("cart-counter").innerHTML =
    // Get the sum of all items quantity.
    cart.map((item) => item.itemQuantity).reduce((sum, qty) => sum + qty, 0);
}

cartCounter();

function saveCartItems() {
  localStorage.setItem("cartData", JSON.stringify(cart));
}

function addItem(findItem) {
  findItem.itemQuantity += 1;
}

function minusItem(findItem) {
  if (findItem.itemQuantity > 1) {
    findItem.itemQuantity -= 1;
  } else {
    findItem.itemQuantity -= 1;
    cart = cart.filter((item) => item.itemQuantity > 0);
  }
}

// delete item
function removeItem(findItem, numberOfItem) {
  findItem.itemQuantity -= numberOfItem;
  cart = cart.filter((item) => item.itemQuantity > 0);
}

function clearCart() {
  cart = [];
}

// View Section

function renderCartItems() {
  // reset cart items.
  shoppingCart.innerHTML = "";

  if (cart.length !== 0) {
    cart.forEach((item) => {
      const findItem = shopList.find((prod) => prod.id === item.id);
      const { id, title, price, image } = findItem;
      shoppingCart.innerHTML += `
        <div class="product-card">
          <span id="close-btn" class="close-btn" onclick="onDelete('${id}')">&times;</span>
          <div class="grid-item1">
            <h2 class="product-title">${title}</h2>
            <img src=${image} alt="" />
            <h3>Total $ ${price * item.itemQuantity}</h3>
          </div>
          <div class="grid-item2">
            <p class="product-price">$ ${price}</p>
            <div class="buttons-container">
              <i class="fa-solid fa-minus" onclick="onCartDecrement('${id}')"></i>
              <div class="quantity">${item.itemQuantity}</div>
              <i class="fa-solid fa-plus" onclick="onCartIncrement('${id}')"></i>
            </div>
          </div>
        </div>
      `;
    });
    renderTotalAmmount();
    label.innerHTML = `
      <h1>Total Ammount: $${totalAmmount}</h1>
      <button class="checkout-btn">Checkout</button>
      <button class="clear-button" onclick="onShowCartModal()">Clear</button>
      `;
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
      <h1 id="total-ammount" >Your Cart is Empty!</h1>
      <a href="index.html">
      <button class="home-btn">Back to home</button>
      </a>
      `;
  }
}

renderCartItems();

function onShowCartModal() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = "block";

  modal.innerHTML = `
    <div class="modal-cart-content">
      <p>Are you sure do you want to clear your Cart?</p>
      <div class="confirm-buttons">
        <button class="no-button" onclick="onCloseCartModal()">No</button>
        <button class="yes-button" onclick="onClearCart()">Yes</button>
      </div>
    </div>
  `;
}

function onCloseCartModal() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = "none";
}

function renderTotalAmmount() {
  totalAmmount = cart
    .map((item) => {
      const { id, itemQuantity } = item;
      const findItem = shopList.find((prod) => prod.id === id);
      return itemQuantity * findItem.price;
    })
    .reduce((sum, ammount) => sum + ammount, 0);
}

// Control Section
// decrement function
function onCartDecrement(id) {
  const findItem = cart.find((item) => item.id === id);

  minusItem(findItem);
  cartCounter();
  saveCartItems();
  renderTotalAmmount();
  renderCartItems();
}

// increment function
function onCartIncrement(id) {
  const findItem = cart.find((item) => item.id === id);

  addItem(findItem);
  cartCounter();
  saveCartItems();
  renderTotalAmmount();
  renderCartItems();
}

function onDelete(id) {
  const findItem = cart.find((item) => item.id === id);
  const numberOfItem = findItem.itemQuantity;

  removeItem(findItem, numberOfItem);
  cartCounter();
  saveCartItems();
  renderTotalAmmount();
  renderCartItems();
}

function onClearCart() {
  onCloseCartModal()
  clearCart();
  cartCounter();
  saveCartItems();
  renderTotalAmmount();
  renderCartItems();
}


