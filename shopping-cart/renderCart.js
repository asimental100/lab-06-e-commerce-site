export function makeReadablePrice(price) {
    const readablePrice = `$${price}`;
    
    return readablePrice;
}

export function renderTableRow(cartItem, clothesItem) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = clothesItem.name;
    nameTd.classList.add('align-left');

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = makeReadablePrice(clothesItem.price);

    const totalTd = document.createElement('td');
    const totalPrice = (clothesItem.price * cartItem.quantity);
    totalTd.textContent = makeReadablePrice(totalPrice);
    totalTd.classList.add('line-item-total');

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;
}