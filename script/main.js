// Model
// if cart has an item load it to the browser. if does not have ? assign an empty array.
let shopItems = [];
let errorMessage = null;
let cart = JSON.parse(localStorage.getItem("cartData")) || [];
let shopListContainer = document.getElementById("item-list-container");


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


async function fetchShopItems() {
  try {
    const response = await fetch("https://ecommerce-data-6721a-default-rtdb.firebaseio.com/shop-item.json");
    console.log("fetching data!");

    if (!response.ok) {
      throw new Error("Something went wrong!")
    }

    const data = await response.json();
    // console.log(data[item1]);

    for (const key in data) {
      shopItems.push({
        id: data[key].id,
        title: data[key].title,
        price: data[key].price,
        image: data[key].image,
        classNames: data[key].classNames
      })
    }

    renderItems();
    // from menu.js
    filterItems("all"); 

  } catch (error) {
    shopListContainer.innerHTML = `<p class="error">${error.message} data please try again!</p>`;
  }
  
  
}
fetchShopItems();


// View
function renderItems() {
  console.log("rendering data");

    let html = '';
    shopItems.forEach((item) => {
      const { id, title, price, image, classNames } = item;
      html += `
          <div id=${id} class="${classNames}">
              <img src=${image} alt="" loading="lazy" />
              <div class="product-label">
                  <p class="product-title">${title}</p>
                  <p class="product-price">$ ${price}</p>
              </div>
              <button class="add-to-cart-btn" onclick="onViewItem('${id}')">View</button>
          </div>
          `;
    });
  shopListContainer.innerHTML = html;
}

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
  bumpCartButton();
}

function onViewItem(id) {
  const prodId = id;
  const findItem = shopItems.find((item) => item.id === prodId);
  let modal = document.getElementById("modal");

  showModal(modal, findItem);
}

function onCloseModal() {
  document.getElementById("modal").style.display = "none";
}

// cart script
