export function findById(arrayName, idName) {
    for (let i = 0; i < arrayName.length; i++) {
        const item = arrayName[i];

        if (item.id === idName) {
            return item;
        }
    }
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}

export function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

export function calcOrderTotal(cart, clothesItem) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const item = findById(clothesItem, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, item.price);
        orderTotal += lineTotal;
    }

    return roundCurrency(orderTotal);
}

export function getCart() {
    const rawCart = localStorage.getItem('cart');
    let cart = JSON.parse(rawCart) || [];

    return cart;
}