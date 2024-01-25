export default class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public inStock: number = 0
    ) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addToStock(quantity: number) {
        this.inStock += quantity
    }

    removeFromStock(quantity: number) {
        this.inStock -= quantity
    }
}