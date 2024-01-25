"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(items, user) {
        this.items = items;
        this.user = user;
        this.total = 0;
        items.forEach(({ product, quantity }) => {
            if (quantity > product.inStock) {
                throw new Error('Quantidade insuficiente no estoque!');
            }
        });
        this.items = items;
        this.user = user;
        this.total = items.reduce((acc, { product, quantity }) => {
            return acc + (product.price * quantity);
        }, 0);
    }
    get readAttributes() {
        return {
            total: this.total,
            items: this.items,
            user: this.user
        };
    }
}
exports.default = Order;
