// Model

// if cart has an item load it to the browser. if does not have ? assign an empty array.
let cart = JSON.parse(localStorage.getItem("cartData")) || [];

function addToCart(prodId, findItem) {
    if (findItem === undefined) {
        cart.push({
            id: prodId,
            itemQuantity: 1
        });
    } else {
        findItem.itemQuantity += 1;
    }
}

// This function use to save the data of the cart array to local storage.
function saveCartItems() {
    localStorage.setItem("cartData", JSON.stringify(cart));
}

// View
function renderItems() {
    const shopListContainer = document.getElementById("item-list-container");

    shopList.forEach(item => {
        let { id, title, price, image, classNames } = item;
        shopListContainer.innerHTML +=
        `
        <div id=${id} class=${classNames}>
            <img src=${image} alt="" />
            <div class="product-label">
                <p class="product-title">${title}</p>
                <p class="product-price">$ ${price}</p>
            </div>
            <button class="add-to-cart-btn" onclick="onAddCart('${id}')">Add To Cart</button>
        </div>
        `;
    });
}

renderItems();

function cartCounter() {
    document.getElementById("cart-counter").innerHTML =
    // Get the sum of all items quantity.
    cart.map((item) => item.itemQuantity).reduce((sum, qty) => sum + qty, 0);
}

cartCounter();

// Controller
function onAddCart(id) {
    const prodId = id;
    const findItem = cart.find(item => item.id === prodId)

    addToCart(prodId, findItem);
    cartCounter();
    saveCartItems();
}
