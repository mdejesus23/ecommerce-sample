// Model
let itemList = [
    {
        id: "kids-01",
        title: "Batman Kids 4-7 - Joker Blue",
        price: 20,
        image: "images/kids-shirt1.jpg",
        classNames: "product-container all-shirts t-shirt kids kids-4-7"
    },
    {
        id: "kids-02",
        title: "Batman Kids 4-7 - Joker Black",
        price: 24,
        image: "images/kids-shirt2.jpg",
        classNames: "product-container all-shirts t-shirt kids kids-4-7"
    },
    {
        id: "kids-03",
        title: "Batman Kids Youth - Batman Two Face",
        price: 22,
        image: "images/kids-tshirt3.jpg",
        classNames: "product-container all-shirts t-shirt kids kids-youth"
    },
    {
        id: "kids-04",
        title: "Batman Kids Youth - Thwack!",
        price: 30,
        image: "images/kids-tshirt4.jpg",
        classNames: "product-container all-shirts t-shirt kids kids-youth"
    },
    {
        id: "long-sleeve-01",
        title: "Batman Long Sleeve - Two Face",
        price: 32,
        image: "images/long-sleeve1.jpg",
        classNames: "product-container all-shirts sweat-hoodies long-sleeve"
    },
    {
        id: "long-sleeve-02",
        title: "Batman Long Sleeve - Batman and Robin",
        price: 32,
        image: "images/long-sleeve2.jpg",
        classNames: "product-container all-shirts sweat-hoodies long-sleeve"
    },
    {
        id: "men-hoodie-01",
        title: "Batman Hoodie - Batman Red images",
        price: 37,
        image: "images/men-hoodie1.jpg",
        classNames: "product-container all-shirts men sweat-hoodies men-hoodies"
    },
    {
        id: "men-hoodie-02",
        title: "Batman Hoodie - Batman and Robin",
        price: 37,
        image: "images/men-hoodie2.jpg",
        classNames: "product-container all-shirts men sweat-hoodies men-hoodies"
    },
    {
        id: "men-tshirt-01",
        title: "Batman T-Shirt - urban Gotham 1",
        price: 20,
        image: "images/tshirt-men1.jpg",
        classNames: "product-container all-shirts tshirt men men-tshirt"
    },
    {
        id: "men-tshirt-02",
        title: "Batman T-Shirt - urban Gotham 2",
        price: 21,
        image: "images/tshirt-men2.jpg",
        classNames: "product-container all-shirts tshirt men men-tshirt"
    },
    {
        id: "men-tshirt-03",
        title: "Batman T-Shirt - urban Gotham 3",
        price: 22,
        image: "images/tshirt-men3.jpg",
        classNames: "product-container all-shirts tshirt men men-tshirt"
    },
    {
        id: "men-tshirt-04",
        title: "Batman T-Shirt - urban Gotham 4",
        price: 24,
        image: "images/tshirt-men4.jpg",
        classNames: "product-container all-shirts tshirt men men-tshirt"
    },
    {
        id: "women-hoodie-01",
        title: "Batman Women Hoodie - Joker Black",
        price: 40,
        image: "images/women-hoodie1.jpg",
        classNames: "product-container all-shirts hoodie women women-hoodie"
    },
    {
        id: "women-tshirt-01",
        title: "Batman Women T-Shirt - urban Gotham 1",
        price: 20,
        image: "images/women-tshirt1.jpg",
        classNames: "product-container all-shirts t-shirt women women-tshirt"
    },
    {
        id: "women-tshirt-02",
        title: "Batman Women T-Shirt - Batman Light Pink",
        price: 24,
        image: "images/women-tshirt2.jpg",
        classNames: "product-container all-shirts t-shirt women women-tshirt"
    },
    {
        id: "women-tshirt-03",
        title: "Batman Women T-Shirt - Batman V-Neck",
        price: 27,
        image: "images/women-tshirt3.jpg",
        classNames: "product-container all-shirts t-shirt women women-tshirt"
    }
];


let cart = [];

// View
const itemListContainer = document.getElementById("item-list-container");

function renderItems() {
    itemList.forEach(item => {
        let { id, title, price, image, classNames } = item;
        itemListContainer.innerHTML +=
        `
        <div id=${id} class=${classNames}>
            <img src=${image} alt="" />
            <div class="product-label">
                <p class="product-title">${title}</p>
                <p class="product-price">$ ${price}</p>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart('${id}')">Add To Cart</button>
        </div>
        `;
    });
}

renderItems();

function addToCart(id) {
    const selectedItem = id;
    const findItem = cart.find(item => item.id === selectedItem)

    if (findItem === undefined) {
        cart.push({
            id: selectedItem,
            itemQuantity: 1
        });
    } else {
        findItem.itemQuantity += 1;
    }
    console.log(cart);
}

/* function decrement() {
    const selectedItem = id;
    const findItem = cart.find(item => item.id === selectedItem)

    if (findItem.itemQuantity == 0) return;
    else {
        findItem.itemQuantity -= 1;
    }
    console.log(cart);
} */

function cartCounter() {
    console.log("cart counter is running!");
}