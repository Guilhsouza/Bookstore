import Product from "./Product.js";

export default class Book extends Product {
    constructor(
        public title: string,
        public synopsis: string,
        public genre: string,
        public pages: number,
        public author: string,
        public description: string,
        public price: number,
        public inStock: number = 0
    ) {
        super(`Livro: ${title}`, description, price, inStock)
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}