"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_js_1 = __importDefault(require("./Product.js"));
class Book extends Product_js_1.default {
    constructor(title, synopsis, genre, pages, author, description, price, inStock = 0) {
        super(`Livro: ${title}`, description, price, inStock);
        this.title = title;
        this.synopsis = synopsis;
        this.genre = genre;
        this.pages = pages;
        this.author = author;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
        this.title = title;
        this.synopsis = synopsis;
        this.genre = genre;
        this.pages = pages;
        this.author = author;
    }
}
exports.default = Book;
