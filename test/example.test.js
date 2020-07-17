// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderClothes } from '../products/renderClothes.js';
import { renderTableRow } from '../shopping-cart/renderCart.js';
import { calcLineTotal, calcOrderTotal } from '../utils.js';
import { cart } from '../shopping-cart/cart.js';
import { currentProducts } from '../products/products.js';

const test = QUnit.test;

test('renders a clothing item', assert => {
    const faceMask = {
        id: 'face-mask',
        name: 'Face Mask',
        image: './face-mask.jpg',
        size: 'one-size',
        color: 'multi',
        category: 'face-mask',
        description: 'Reusable 4-Layer Silk-Blend Face Mask',
        price: 5
    };
    
    const expected = '<li class="face-mask" title="Reusable 4-Layer Silk-Blend Face Mask" style="border: 1px solid white;"><h3>Face Mask</h3><span>Reusable 4-Layer Silk-Blend Face Mask</span><img src="../images/./face-mask.jpg" alt="Face Mask image"><p class="price">$5.00<input type="number" min="1" max="99"><button value="face-mask">Add</button></p></li>';
    
    const stepOne = renderClothes(faceMask);
    const actual = stepOne.outerHTML;

    assert.equal(actual, expected);
});

test('renders a table row', assert => {
    const cartItem = {
        id: 'face-mask',
        quantity: 2
    };

    const faceMask = {
        id: 'face-mask',
        name: 'Face Mask',
        image: './face-mask.jpg',
        size: 'one-size',
        color: 'multi',
        category: 'face-mask',
        description: 'Reusable 4-Layer Silk-Blend Face Mask',
        price: 5
    };
    const expected = '<tr><td>Face Mask</td><td>2</td><td>$5</td><td>$10</td></tr>';

    const stepOne = renderTableRow(cartItem, faceMask);
    const actual = stepOne.outerHTML;
    
    assert.equal(actual, expected);
});

test ('calculate line total', assert => {
    const itemQuantity = 5;
    const itemPrice = 25;
    const expected = 125;

    const actual = calcLineTotal(itemPrice, itemQuantity);

    assert.equal(actual, expected);
});

test ('calculate order total from multiple line totals', assert => {

    const expected = 515;
    const actual = calcOrderTotal(cart, currentProducts);

    assert.equal(actual, expected);
});