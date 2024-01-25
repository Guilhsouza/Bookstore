interface StorageData {
    authors: any[];
    books: any[];
    posters: any[];
    order: any[];
    users: any[];
}

import Book from "./entities/Book.js";
import Order from "./entities/Order.js";
import Poster from "./entities/Poster.js";
import User from "./entities/User.js";

export default class Database {
    #storage: StorageData = {
        authors: [],
        books: [],
        posters: [],
        order: [],
        users: []
    }

    find(key: keyof StorageData) {
        return this.#storage[key]
    }

    saveAuthor(author: Object) {
        this.#storage.authors.push(author)
    }

    findBookByName(bookName: string) {
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book: Book) {
        const bookExists = this.findBookByName(book.name)
        if (!bookExists) [
            this.#storage.books.push(book)
        ]
    }

    addBooksToStock(bookName: string, quantity: number) {
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName: string, quantity: number) {
        const book = this.findBookByName(bookName)
        book.removeFromStock(quantity)
    }

    findPosterByName(posterName: string) {
        return this.#storage.posters.find(p => p.name === posterName)
    }

    savePoster(poster: Poster) {
        const posterExists = this.findPosterByName(poster.name)
        if (!posterExists) [
            this.#storage.posters.push(poster)
        ]
    }

    addPostersToStock(posterName: string, quantity: number) {
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removePostersFromStock(posterName: string, quantity: number) {
        const poster = this.findPosterByName(posterName)
        poster?.removePosterFromStock(quantity)
    }

    saveUser(user: User) {
        const userExists = this.#storage.users.find((u) => { u.email === user.email })
        if (!userExists) {
            this.#storage.users.push(user)
        }
    }

    saverOrder(order: Order) {
        this.#storage.order.push(order)
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.order)
        console.table(this.#storage.users)
    }
}

