import { findById, toUSD, calcOrderTotal } from '../utils.js';
import { cart } from './cart.js'
import { currentProducts } from '../products/products.js'
import { renderTableRow } from './renderCart.js'

const tableBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total');

for (let i = 0; i < cart.length; i++) {
    
    const cartItem = cart[i];
    
    const clothesItem = findById(currentProducts, cartItem.id);

    const dom = renderTableRow(cartItem, clothesItem);

    tableBody.appendChild(dom);
}


const orderTotal = calcOrderTotal(cart, currentProducts);
orderTotalCell.textContent = toUSD(orderTotal);