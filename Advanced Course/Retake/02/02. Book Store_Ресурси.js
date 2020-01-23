const assert = require('chai').assert;

class BookStore {
    constructor(name) {
        this.name = name;
        this.books = [];
        this._workers = [];
    }

    get workers() {
        return this._workers;
    }

    stockBooks(newBooks) {
        newBooks.forEach((book) => {
            let [title, author] = book.split('-');
            this.books.push({ title, author });
        });

        return this.books;
    }

    hire(name, position) {
        let worker = this.workers.filter(w => w.name === name)[0];
        if (!worker) {
            worker = {
                name: name,
                position: position,
                booksSold: 0
            };
            this.workers.push(worker);
        } else {
            throw new Error('This person is our employee');
        }
        return `${name} started work at ${this.name} as ${position}`
    }

    fire(name) {
        let worker = this.workers.filter(w => w.name === name)[0];
        if (!worker) {
            throw new Error(`${name} doesn't work here`);
        }
        let index = this.workers.indexOf(worker);
        this.workers.splice(index, 1);
        return `${name} is fired`;
    }

    sellBook(title, workerName) {
        let book = this.books.filter(b => b.title === title)[0];
        if (!book) {
            throw new Error('This book is out of stock');
        }

        let worker = this.workers.filter((w) => w.name === workerName)[0];
        if (!worker) {
            throw new Error(`${workerName} is not working here`)
        }

        this.books = this.books.filter(b => b.title !== title);
        this.workers.filter(w => w.name === workerName).map(w => w.booksSold++);
    }

    printWorkers() {
        let result = "";
        this.workers.forEach(w => {
            result += `Name:${w.name} Position:${w.position} BooksSold:${w.booksSold}\n`;
        })
        return result.trim();
    }
}

describe("Tests", function () {

    it("stock books method", function () {
        let store = new BookStore('Store');

        assert.deepEqual(store.stockBooks(['Test book-Someone', 'Something-Me', 'New book-You']),
            [
                {
                    "author": "Someone",
                    "title": "Test book"
                },
                {
                    "author": "Me",
                    "title": "Something"
                },
                {
                    "author": "You",
                    "title": "New book"
                }
            ]);
    });

    it("stock more books", () => {
        let store = new BookStore('Store');
        store.stockBooks(['Test book-Someone', 'Something-Me', 'New book-You']);
        store.hire('George', 'seller');
        store.sellBook('Test book', 'George');

        assert.deepEqual(store.stockBooks(['Something-Me']),
            [
                {
                    "author": "Me",
                    "title": "Something"
                },
                {
                    "author": "You",
                    "title": "New book"
                },
                {
                    "author": "Me",
                    "title": "Something"
                }
            ]);
    });

    it("hire method", () => {
        let myClass = new BookStore('Store');

        assert.equal(myClass.hire('George', 'seller'), 'George started work at Store as seller');
    });

    it("fire method", () => {
        let myClass = new BookStore('Store');
        myClass.hire('George', 'seller');
        myClass.hire('Ina', 'seller');
        myClass.hire('Peter', 'juniorSeller');

        assert.equal(myClass.fire('Peter'), 'Peter is fired');
    });

    it("sell book method", () => {
        let myClass = new BookStore('Store');
        myClass.stockBooks(['Test book-Someone', 'Something-Me', 'New book-You']);
        myClass.hire('George', 'seller');

        assert.equal(myClass.sellBook('Test book', 'George'), undefined);
    });

    it("print workers method", () => {
        let myClass = new BookStore('Store');
        myClass.hire('George', 'seller');
        myClass.hire('Ina', 'seller');
        myClass.hire('Peter', 'juniorSeller');

        assert.equal(myClass.printWorkers(),
            "Name:George Position:seller BooksSold:0\nName:Ina Position:seller BooksSold:0\nName:Peter Position:juniorSeller BooksSold:0");
    });

    it("print workers method and firing", () => {
        let myClass = new BookStore('Store');
        myClass.hire('George', 'seller');
        myClass.hire('Ina', 'seller');
        myClass.hire('Peter', 'juniorSeller');

        myClass.fire('Peter');

        assert.equal(myClass.printWorkers(),
            "Name:George Position:seller BooksSold:0\nName:Ina Position:seller BooksSold:0");
    });
});


// let myclass = new BookStore('store');
// myclass.hire('georfe', 'seller');
// myclass.hire('ina', 'seller');
// myclass.hire('peter', 'seller');

// console.log(myclass.printWorkers());

