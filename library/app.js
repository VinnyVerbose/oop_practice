/*

Project 2: Library App

This is where OOP starts becoming useful because you'll have objects managing other objects.

You'll create two classes:

Book

Properties:

title
author
read

Methods:

markRead()


Library

Properties:

books (an array)

Methods:

addBook(book)
removeBook(title)
findBook(title)

The important design question:

When a book is added to the library, should the books array contain plain objects like:

{
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  read: false
}

or should it contain Book instances?

Think about that before you start coding. That's the key OOP decision in this project.

*/

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.read  = false;
    }

    markRead(){
        this.read = true;
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        if(!(book instanceof Book)){ 
            throw new Error('This book is not authorized!') 
        } 
        
        this.books.push(book);        
    }

    removeBook(title){
        this.books = this.books.filter(book => book.title !== title);
    }

    findBook(title){
        return this.books.find(book => book.title === title);
    }

    listBooks(){
        return [...this.books];
    }
}

const lib = new Library();
lib.addBook(new Book('Harry Putter', 'Tiger Woods'));
lib.addBook(new Book('Go', 'Stay Longer'));
lib.addBook(new Book('Green Eggs and Spam', 'Dr. Sauce'));

window.lib = lib;
