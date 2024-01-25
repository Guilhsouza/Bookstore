"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Database_storage;
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        _Database_storage.set(this, {
            authors: [],
            books: [],
            posters: [],
            order: [],
            users: []
        });
    }
    find(key) {
        return __classPrivateFieldGet(this, _Database_storage, "f")[key];
    }
    saveAuthor(author) {
        __classPrivateFieldGet(this, _Database_storage, "f").authors.push(author);
    }
    findBookByName(bookName) {
        return __classPrivateFieldGet(this, _Database_storage, "f").books.find(b => b.name === bookName);
    }
    saveBook(book) {
        const bookExists = this.findBookByName(book.name);
        if (!bookExists)
            [
                __classPrivateFieldGet(this, _Database_storage, "f").books.push(book)
            ];
    }
    addBooksToStock(bookName, quantity) {
        const book = this.findBookByName(bookName);
        book === null || book === void 0 ? void 0 : book.addToStock(quantity);
    }
    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName);
        book.removeFromStock(quantity);
    }
    findPosterByName(posterName) {
        return __classPrivateFieldGet(this, _Database_storage, "f").posters.find(p => p.name === posterName);
    }
    savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name);
        if (!posterExists)
            [
                __classPrivateFieldGet(this, _Database_storage, "f").posters.push(poster)
            ];
    }
    addPostersToStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName);
        poster === null || poster === void 0 ? void 0 : poster.addToStock(quantity);
    }
    removePostersFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName);
        poster === null || poster === void 0 ? void 0 : poster.removePosterFromStock(quantity);
    }
    saveUser(user) {
        const userExists = __classPrivateFieldGet(this, _Database_storage, "f").users.find((u) => { u.email === user.email; });
        if (!userExists) {
            __classPrivateFieldGet(this, _Database_storage, "f").users.push(user);
        }
    }
    saverOrder(order) {
        __classPrivateFieldGet(this, _Database_storage, "f").order.push(order);
    }
    showStorage() {
        console.table(__classPrivateFieldGet(this, _Database_storage, "f").authors);
        console.table(__classPrivateFieldGet(this, _Database_storage, "f").books);
        console.table(__classPrivateFieldGet(this, _Database_storage, "f").posters);
        console.table(__classPrivateFieldGet(this, _Database_storage, "f").order);
        console.table(__classPrivateFieldGet(this, _Database_storage, "f").users);
    }
}
_Database_storage = new WeakMap();
exports.default = Database;
