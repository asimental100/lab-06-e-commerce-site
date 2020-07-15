import { cart } from "./shopping-cart/cart";

export function findById(arrayName, idName) {
        for (let i = 0; i < arrayName.length; i++) {
            const item = arrayName[i];

            if (item.id === idName) {
                return item;
            }
        }
        return null;
}