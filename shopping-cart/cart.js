export const cart = [
    {
        id: 'navy-shirt',
        quantity: 1
    },
    {
        id: 'green-shirt',
        quantity: 2
    },
    {
        id: 'red-shirt',
        quantity: 3
    },
    {
        id: 'white-shirt',
        quantity: 4
    },
    {
        id: 'black-shirt',
        quantity: 5
    }
]

export function findById(arrayName, idName) {
    let item = {};
    for (let i = 0; i < arrayName.length; i++) {
        if (arrayName[i].id === idName) {
            item = arrayName[i];
        }
    }
    return item;
}