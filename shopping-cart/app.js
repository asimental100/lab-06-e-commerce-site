import { currentProducts } from '../products/products.js';
import { cart } from './cart.js';

const homeButton = document.getElementById("go-home");
const productPageButton = document.getElementById("go-to-products");

const productList = document.getElementById("product-list");

let counter1 = 0;
let counter2 = 0;

homeButton.addEventListener('click', () => {
    counter1++;
    console.log(`Home button clicked ${counter1} times!`);
})

productPageButton.addEventListener('click', () => {
    counter2++;
    console.log(`Product button clicked ${counter2} times!`);
})