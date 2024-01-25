import Product from "./Product.js"

export default class Order {
    private total: number = 0

    constructor(
        private items: { product: Product, quantity: number }[],
        private user: {}
    ) {
        items.forEach(({ product, quantity }) => {
            if (quantity > product.inStock) {
                throw new Error('Quantidade insuficiente no estoque!')
            }
        })

        this.items = items
        this.user = user

        this.total = items.reduce((acc, { product, quantity }): number => {
            return acc + (product.price * quantity)
        }, 0)
    }

    get readAttributes() {
        return {
            total: this.total,
            items: this.items,
            user: this.user
        }
    }
}