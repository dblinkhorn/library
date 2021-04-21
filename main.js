// object (Book) constructor function
function Book(title, author, numberOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
}

// array to store each created instance of Book object
let library = [];

function addBookToLibrary(userBook) {
  userBook.push(library);
}

var newBookForm = document.getElementById("newBookForm");

newBookForm.onsubmit = function createBookInstance(submit) {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  numberOfPages = document.getElementById("pages").value;
  haveRead = document.getElementById("checkRead").checked;

  var newBook = new Book(title, author, numberOfPages, haveRead);
  library.push(newBook);

  submit.preventDefault();
  closeNewBookForm();

  function addNewCard(newBook) {
    // create new book card
    var newBookCard = `
    <div class="bookCard" id="bookCard">
      <ul class="attributes" id="attributes">
        <li><center><strong>${newBook.title}</strong></center></li>
        <li><i>By ${newBook.author}</i></li>
        <li>${newBook.numberOfPages} pages</li>
        <li>Read: ${newBook.haveRead}</li>
      </ul>
      <div class="buttons" id="buttons">
        <button type="button" class="read" id="read">Read</button>
        <button type="button" class="remove" id="remove">Remove</button>
      </div>
    </div>
  `;
  libraryDiv.innerHTML += newBookCard;
}

addNewCard(newBook);
newBookForm.reset();

}

let addNewBookButton = document.getElementById("newBookButton").addEventListener("click", () => openNewBookForm());

let closeNewBookFormButton = document.getElementById("cancel").addEventListener("click", () => closeNewBookForm());

function openNewBookForm() {
  document.getElementById("newBookPopup").style.display = "block";
};
function closeNewBookForm() {
  document.getElementById("newBookPopup").style.display = "none";
};

var libraryDiv = document.getElementById("library");