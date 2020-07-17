import { findById, toUSD, calcOrderTotal, getCart } from '../utils.js';
import { currentProducts } from '../products/products.js';
import { renderTableRow } from './renderCart.js';

const tableBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total');

const placeOrderButton = document.getElementById('place-order-button');
const emptyCartButton = document.getElementById('empty-cart-button');

let orderNumber = Math.floor(Math.random() * 99999999);

let cart = getCart();

for (let i = 0; i < cart.length; i++) {
    
    const cartItem = cart[i];
    
    const clothesItem = findById(currentProducts, cartItem.id);

    const dom = renderTableRow(cartItem, clothesItem);

    tableBody.appendChild(dom);
}


const orderTotal = calcOrderTotal(cart, currentProducts);
orderTotalCell.textContent = toUSD(orderTotal);

placeOrderButton.addEventListener('click', () => {
    let orderConfirmation = confirm('Are you SURE you would like to place an order?');
    if (orderConfirmation) {
        alert(`Thank you for your order!\nYour order confirmation number is: ${orderNumber}`);
        localStorage.clear();
        location.reload();
    } else {
        prompt('Why Not?');
    }
});

emptyCartButton.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});