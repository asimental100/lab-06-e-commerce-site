import { currentProducts } from './products.js'
import { renderClothes } from './renderClothes.js';

const productList = document.getElementById("product-list");

for (let i = 0; i < currentProducts.length; i++) {
    const product = currentProducts[i];
    const el = renderClothes(product);
    productList.appendChild(el);
}
