"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _App_database;
Object.defineProperty(exports, "__esModule", { value: true });
const Database_js_1 = __importDefault(require("./Database.js"));
const User_js_1 = __importDefault(require("./entities/User.js"));
const Author_js_1 = __importDefault(require("./entities/Author.js"));
const Book_js_1 = __importDefault(require("./entities/Book.js"));
const Poster_js_1 = __importDefault(require("./entities/Poster.js"));
const Order_js_1 = __importDefault(require("./entities/Order.js"));
class App {
    createUser(name, email, password) {
        const user = new User_js_1.default(name, email, password);
        __classPrivateFieldGet(_a, _a, "f", _App_database).saveUser(user);
    }
    createAuthor(name, nationality, bio) {
        const author = new Author_js_1.default(name, nationality, bio);
        __classPrivateFieldGet(_a, _a, "f", _App_database).saveAuthor(author);
    }
    getUsers() {
        return __classPrivateFieldGet(_a, _a, "f", _App_database).find('users');
    }
    getAuthors() {
        return __classPrivateFieldGet(_a, _a, "f", _App_database).find('authors');
    }
    getBooks() {
        return __classPrivateFieldGet(_a, _a, "f", _App_database).find('books');
    }
    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book_js_1.default(title, synopsis, genre, pages, author, description, price, inStock);
        __classPrivateFieldGet(_a, _a, "f", _App_database).saveBook(book);
    }
    addBook(bookName, quantity) {
        __classPrivateFieldGet(_a, _a, "f", _App_database).addBooksToStock(bookName, quantity);
    }
    createPosters(name, description, width, height, price, inStock) {
        const poster = new Poster_js_1.default(name, description, width, height, price, inStock);
        __classPrivateFieldGet(_a, _a, "f", _App_database).savePoster(poster);
    }
    addPoster(posterName, quantity) {
        __classPrivateFieldGet(_a, _a, "f", _App_database).addPostersToStock(posterName, quantity);
    }
    createOrder(items, user) {
        const order = new Order_js_1.default(items, user);
        __classPrivateFieldGet(_a, _a, "f", _App_database).saverOrder(order);
        order.readAttributes.items.forEach(({ product, quantity }) => {
            if (product instanceof Book_js_1.default) {
                return __classPrivateFieldGet(_a, _a, "f", _App_database).removeBooksFromStock(product.name, quantity);
            }
            return __classPrivateFieldGet(_a, _a, "f", _App_database).removePostersFromStock(product.name, quantity);
        });
    }
    getOrders() {
        return __classPrivateFieldGet(_a, _a, "f", _App_database).find('order');
    }
    showDatabase() {
        return __classPrivateFieldGet(_a, _a, "f", _App_database).showStorage();
    }
}
_a = App;
_App_database = { value: new Database_js_1.default() };
exports.default = App;
