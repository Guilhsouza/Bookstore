"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_js_1 = __importDefault(require("./Product.js"));
class Poster extends Product_js_1.default {
    constructor(name, description, width, height, price, inStock = 0) {
        super(name, description, price, inStock);
        this.name = name;
        this.description = description;
        this.width = width;
        this.height = height;
        this.price = price;
        this.inStock = inStock;
        this.height = height;
        this.width = width;
    }
}
exports.default = Poster;
