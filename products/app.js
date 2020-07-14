import { currentProducts } from './products.js';
import { renderClothes } from './renderClothes.js';
/*
const homeButton = document.getElementById("go-home");
const cartButton = document.getElementById("go-to-cart");
*/
const productList = document.getElementById("product-list");
/*
let counter1 = 0;
let counter2 = 0;

homeButton.addEventListener('click', () => {
    counter1++;
    console.log(`Home button clicked ${counter1} times!`);
})

cartButton.addEventListener('click', () => {
    counter2++;
    console.log(`Cart button clicked ${counter2} times!`);
}) */

for (let i = 0; i < currentProducts.length; i++) {
    const product = currentProducts[i];
    const el = renderClothes(product);
    productList.appendChild(el);
}