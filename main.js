/*
    James Carlson
    Coding Temple - SE FT-144
    Frontend, Module 10 Lesson 4 Assignment: JavaScript Objects
*/

let colorInstructions = "color:green;"; 
console.log("%c1. Exploring JavaScript Objects", colorInstructions);

// TASK 1 - Create a constructor function for the Book object with properties for title, author, and pages.
class Book {
    constructor(title, author, pages) {
       this.title = title;
       this.author = author;
       this.pages = pages;
    }

    // TASK 2 - Implement a method within the Book object to display book information.
    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
        console.log("");
    }
}

// TASK 3 - Create an array to store book objects and implement functions to add new books and search for books by title or author.

let libraryBooks = [];

function addBookToLibrary(title, author, pages) {
    let book = new Book(title, author, pages);
    libraryBooks.push(book);
}

function searchBooksInLibrary(searchTerm) {
    let searchResults = libraryBooks.filter(
        book => book.title.toLowerCase().includes(searchTerm.toLowerCase()) 
        || book.author.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(`Search Results for "${searchTerm}":`);
    console.log(searchResults);
    console.log("");
}

// TASK 4 - Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

function displayBooks100PagesAndOver() {
    let filterResults = libraryBooks.filter(book => book.pages >= 100);
    console.log("Books with 100 Pages or More:");
    console.log(filterResults);
    console.log("");
}

function displayBooksUnder100Pages() {
    let filterResults = libraryBooks.filter(book => book.pages < 100);
    console.log("Books Under 100 Pages:");
    console.log(filterResults);
    console.log("");
}

function alterTitlesAndAuthor() {
    let alteredInfo = libraryBooks.map(book =>  new Book("Title: " + book.title, "Author: " + book.author, book.pages))
    console.log("Books with 'Title:' and 'Author:' added to properties:")
    console.log(alteredInfo);
}

// TESTS
addBookToLibrary("Elantris", "Brandon Sanderson", 496);
addBookToLibrary("Mistborn: The Lost Metal", "Brandon Sanderson", 528);
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", 662);
addBookToLibrary("The Giving Tree", "Shel Silverstein", 64);
addBookToLibrary("If You Give a Mouse a Cookie", "Laura Numeroff", 40);
console.log(libraryBooks)
libraryBooks[0].displayInfo()
searchBooksInLibrary("Brandon");
searchBooksInLibrary("the");
displayBooks100PagesAndOver();
displayBooksUnder100Pages();
alterTitlesAndAuthor();



console.log("%c2. Exploring Objects and Math in JavaScript", colorInstructions);

class Account {
    // TASK 1 - Create a constructor function for the Account object with properties for accountNumber, balance, and owner.
    constructor(accountNumber, balance, owner) {
       this.accountNumber = accountNumber;
       this.balance = balance;
       this.owner = owner;
    }

    // TASK 2 - Implement methods within the Account object to deposit and withdraw funds.
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Cannot withdraw $${amount}. Current balance: $${this.balance}`);
        }
        else {
            this.balance -= amount; 
        }
    }
    
    // TASK 3 - Create a method to calculate compound interest based on the balance and specified interest rate.
    calcCompoundInterest(interestRate, compoundedPerYear, years) {
        /* I found this formula online:
            A = P(1 + r/n) ^ (n*t)
            where
            A = amount to be had after specified time(t)
            P = amount we started with
            r = interestRate (decimal)
            n = compoundedPerYear, amount of times interest is comoounded per year -- e.g., monthly 
            t = amount of time in years
        */
    }
}

// TESTS
let account = new Account(789456123, 1204.78, "Milburn Pennybags");
account.withdraw(1300);
console.log(account.balance);
account.deposit(260);
console.log(account.balance);
account.withdraw(40);
console.log(account.balance);