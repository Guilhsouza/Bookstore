import Product from "./Product.js";

export default class Poster extends Product {
    constructor(
        public name: string,
        public description: string,
        public width: number,
        public height: number,
        public price: number,
        public inStock: number = 0
    ) {
        super(name, description, price, inStock)
        this.height = height
        this.width = width
    }
}