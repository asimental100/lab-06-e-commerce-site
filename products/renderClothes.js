import { getCart, findById } from '../utils.js';

const addSpan = document.getElementById('product-added-span');

export function renderClothes(clothingItem) {
    const li = document.createElement('li');
    li.className = clothingItem.category;
    li.title = clothingItem.description;

    const h3 = document.createElement('h3');
    h3.textContent = clothingItem.name;
    li.appendChild(h3);

    const span = document.createElement('span');
    span.textContent = clothingItem.description;
    li.appendChild(span);

    const img = document.createElement('img');
    img.src = '../images/' + clothingItem.image;
    img.alt = clothingItem.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + clothingItem.price.toFixed(2);

    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = clothingItem.id;
    button.addEventListener('click', () => {
        // console.log('ID: ' + clothingItem.id);
        const cart = getCart();

        const clothesInCart = findById(cart, clothingItem.id);

        if (clothesInCart) {
            clothesInCart.quantity++;

            addSpan.style.display = 'block';
            addSpan.textContent = `1 ${clothingItem.name} has been added to your cart, you now have ${clothesInCart.quantity} ${clothingItem.name} in your cart.`;

        } else {
            const newClothingItem = {
                id: clothingItem.id,
                quantity: 1
            };
            cart.push(newClothingItem);
            addSpan.style.display = 'block';
            addSpan.textContent = `1 ${clothingItem.name} has been added to your cart`;
        }

        const stringyCart = JSON.stringify(cart);
        localStorage.setItem('cart', stringyCart);

        // console.log(cart);
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}