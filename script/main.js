// Model
// if cart has an item load it to the browser. if does not have ? assign an empty array.
let cart = JSON.parse(localStorage.getItem("cartData")) || [];

function addToCart(product) {
  const { prodId, findItem, numOfItem } = product;

  if (numOfItem == 0) {
    return;
  } else if (findItem === undefined) {
    cart.push({
      id: prodId,
      itemQuantity: Number(numOfItem),
    });
  } else {
    findItem.itemQuantity += Number(numOfItem);
  }
}

// This function use to save the data of the cart array to local storage.
function saveCartItems() {
  localStorage.setItem("cartData", JSON.stringify(cart));
}

// View
function renderItems() {
  const shopListContainer = document.getElementById("item-list-container");

  shopList.forEach((item) => {
    let { id, title, price, image, classNames } = item;
    shopListContainer.innerHTML += `
        <div id=${id} class=${classNames}>
            <img src=${image} alt="" />
            <div class="product-label">
                <p class="product-title">${title}</p>
                <p class="product-price">$ ${price}</p>
            </div>
            <button class="add-to-cart-btn" onclick="onViewItem('${id}')">View</button>
        </div>
        `;
  });
}
renderItems();

function showModal(modal, findItem) {
  modal.style.display = "block";

  const { id, title, price, image } = findItem;

  modal.innerHTML = `
          <div class="modal-content">
              <span id="close-btn" class="close-btn" onclick="onCloseModal()">&times;</span>
              <div class="img-container">
                  <img class="product-image" src=${image} alt="" />
              </div>
              <div class="label">
                  <div>
                      <h2 class="product-title">${title}</h2>
                      <p class="item-price">Price: $ ${price}</p>
                  </div>
                  <p class="quantity-label">Quantity:</p>
                  <div class="flex">
                      <i onclick="onDecrement()" class="fa-solid fa-chevron-down"></i>
                      <div id="item-qty" class="quantity">1</div>
                      <i onclick="onIncrement()" class="fa-solid fa-chevron-up"></i>
                  </div>
                  <button class="addToCart" onclick="onAddCart('${id}')">Add To Cart</button>
              </div>
          </div>
      `;
}

function cartCounter() {
  document.getElementById("cart-counter").innerHTML =
    // Get the sum of all items quantity.
    cart.map((item) => item.itemQuantity).reduce((sum, qty) => sum + qty, 0);
}
cartCounter();

function onIncrement() {
  const numOfItem = document.getElementById("item-qty");
  const result = Number(numOfItem.innerText) + 1;

  numOfItem.innerText = result;
}

function onDecrement() {
  const numOfItem = document.getElementById("item-qty");
  const result = Number(numOfItem.innerText);

  if (result === 0) return;
  else {
    numOfItem.innerText = result - 1;
  }
}

// Controller!!!
// Controller!!!
// Controller!!!
function onAddCart(id) {
  const prodId = id;
  const findItem = cart.find((item) => item.id === prodId);
  const numOfItem = document.getElementById("item-qty").innerText;

  const product = {
    prodId: prodId,
    findItem: findItem,
    numOfItem: numOfItem,
  };

  // console.log(numOfItem);
  addToCart(product);
  cartCounter();
  saveCartItems();
}

function onViewItem(id) {
  const prodId = id;
  const findItem = shopList.find((item) => item.id === prodId);
  let modal = document.getElementById("modal");

  showModal(modal, findItem);
}

function onCloseModal() {
  document.getElementById("modal").style.display = "none";
}
