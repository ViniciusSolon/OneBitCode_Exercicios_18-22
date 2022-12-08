const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(
    titulo,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0
  ) {
    super(`Livro: ${titulo}`, description, price, inStock);
    this.title = this.title;
    this.synopsis = synopsis;
    this.genre = genre;
    this.pages = pages;
    this.author = author;
  }
};
