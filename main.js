// array to store each created instance of Book object
var library = [];

// variable to reference the library div
var libraryDiv = document.getElementById("library");

// variable to reference the form to add a new book
var newBookForm = document.getElementById("newBookForm");

// counter variable to append a unique id to new book card divs
var index = 0;

// variable to reference the add new book button and adds an event listener to run the function to popup the form on click
let addNewBookButton = document.getElementById("newBookButton").addEventListener("click", () => openNewBookForm());

// same as above but for the cancel button, and it closes the popup on click
let closeNewBookFormButton = document.getElementById("cancel").addEventListener("click", () => closeNewBookForm());

// object (Book) constructor function
function Book(title, author, numberOfPages, haveRead, index) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
  this.index = index;
}

// adds newly created book instance to the library array
function addBookToLibrary(userBook) {
  userBook.push(library);
}

// new book form is submitted, run the function createBookInstance
newBookForm.onsubmit = function createBookInstance(submit) {
  // each item of the object is assigned a value based on what the user enters in each input box, except index
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  numberOfPages = document.getElementById("pages").value;
  haveRead = document.getElementById("checkRead").checked;

  // variable to reference 
  var newBook = new Book(title, author, numberOfPages, haveRead, index);
  library.push(newBook);

  index += 1;

  libraryDiv.addEventListener("click", removeCard);
  
  // removes a book card from the libraryDiv
  function removeCard(event) {
    // variable to store
    var cardId = event.target.getAttribute("id");
    var cardToDelete = document.getElementById(cardId);
    cardToDelete.parentNode.parentNode.remove();

    // also remove the book instance from the library array
    library.splice(library.findIndex(book => book.field === cardId), 1)

  }

  submit.preventDefault();
  closeNewBookForm();

  function addNewCard(newBook, index) {
    // create new book card
    var newBookCard = `
    <div class="bookCard" id="bookCard-${index}">
      <ul class="attributes" id="attributes">
        <li><center><strong>${newBook.title}</strong></center></li>
        <li><i>By ${newBook.author}</i></li>
        <li>${newBook.numberOfPages} pages</li>
        <li>Read: ${newBook.haveRead}</li>
      </ul>
      <div class="buttons" id="buttons">
        <button type="button" class="read" id="read">Read</button>
        <button type="button" class="remove" id="remove-${index}"}>Remove</button>
      </div>
    </div>
    `;
    libraryDiv.innerHTML += newBookCard;

  }
  addNewCard(newBook, index);
  newBookForm.reset();
}

function openNewBookForm() {
  document.getElementById("newBookPopup").style.display = "block";
};
function closeNewBookForm() {
  document.getElementById("newBookPopup").style.display = "none";
};