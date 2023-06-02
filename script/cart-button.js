
const bumpCartButton = () => {
    const cartButton = document.getElementById('cart-button');
    
    cartButton.classList.add('bump');

    const timer = setTimeout(() => {
    cartButton.classList.remove('bump');
      }, 300);
}

bumpCartButton();