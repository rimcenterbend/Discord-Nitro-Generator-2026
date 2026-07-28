class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, pages) {
        this.books.push(new Book(title, author, pages));
    }

    totalPages() {
        return this.books.reduce((sum, book) => sum + book.pages, 0);
    }

    printCatalog() {
        this.books.sort((a, b) => a.title.localeCompare(b.title));

        console.log("Library Catalog");
        console.log("================");

        for (const book of this.books) {
            console.log(
                `${book.title} | ${book.author} | ${book.pages} pages`
            );
        }

        console.log("================");
        console.log(`Total Pages: ${this.totalPages()}`);
    }
}

const library = new Library();

library.addBook("Clean Code", "Robert C. Martin", 464);
library.addBook("Refactoring", "Martin Fowler", 448);
library.addBook("Design Patterns", "Erich Gamma", 395);
library.addBook("The Pragmatic Programmer", "Andrew Hunt", 352);

library.printCatalog();
