import Database from "./Database.js";
import Product from "./entities/Product.js";
import User from "./entities/User.js";
import Author from "./entities/Author.js";
import Book from "./entities/Book.js";
import Poster from "./entities/Poster.js";
import Order from "./entities/Order.js";

export default class App {
    static #database = new Database()

    createUser(name: string, email: string, password: string) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    createAuthor(name: string, nationality: string, bio: string) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getUsers() {
        return App.#database.find('users')
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    getBooks() {
        return App.#database.find('books')
    }

    createBook(title: string, synopsis: string, genre: string, pages: number, author: string, description: string, price: number, inStock: number) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName: string, quantity: number) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    createPosters(name: string, description: string, width: number, height: number, price: number, inStock: number) {
        const poster = new Poster(name, description, width, height, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName: string, quantity: number) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    createOrder(items: { product: Product, quantity: number }[], user: {}) {
        const order = new Order(items, user)
        App.#database.saverOrder(order)

        order.readAttributes.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                return App.#database.removeBooksFromStock(product.name, quantity)
            }
            return App.#database.removePostersFromStock(product.name, quantity)
        })
    }

    getOrders() {
        return App.#database.find('order')
    }

    showDatabase() {
        return App.#database.showStorage()
    }
}
