import { currentProducts } from './products/products.js';

const productPageButton = document.getElementById('go-to-products');
const cartButton = document.getElementById('go-to-cart');

const productList = document.getElementById('product-list');

// let counter1 = 0;
// let counter2 = 0;

productPageButton.addEventListener('click', () => {
    counter1++;
    // console.log(`Product button clicked ${counter1} times!`);
    productList.textContent = currentProducts;
});

cartButton.addEventListener('click', () => {
    counter2++;
    // console.log(`Cart button clicked ${counter2} times!`);
});