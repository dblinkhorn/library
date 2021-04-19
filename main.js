function Book(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
}

Book.prototype.showBookInfo = function() {
    var readStatus;
    if (haveRead) {
        readStatus = "has been read.";
    } readStatus = "not read yet.";
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${readStatus}`;
}

let library = [];

function addBookToLibrary(userBook) {
    userBook.push(library);
}

function displayBooks (library) {
    library.forEach(function() {
        // write code to display each book on a card in the page
    });
}