import { getCart, findById } from '../utils.js';

export function renderClothes(clothingItem) {
    const li = document.createElement('li');
    li.className = clothingItem.category;
    li.title = clothingItem.description;

    const h3 = document.createElement('h3');
    h3.textContent = clothingItem.name;
    li.appendChild(h3);

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
    button.value = clothingItem.code;
    button.addEventListener('click', () => {
        // console.log('ID: ' + clothingItem.id);
        const cart = getCart();

        const clothesInCart = findById(cart, clothingItem.id);

        if (clothesInCart) {
            clothesInCart.quantity++;

        } else {
            const newClothingItem = {
                id: clothingItem.id,
                quantity: 1
            };
            cart.push(newClothingItem);
        }

        const stringyCart = JSON.stringify(cart);
        localStorage.setItem('cart', stringyCart);

        // console.log(cart);
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
};