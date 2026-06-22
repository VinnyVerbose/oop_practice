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

lib.findBook('Go') // Book {title: 'Go', author: 'Stay Longer', read: false}

lib.listBooks(); // [Book, Book, Book]