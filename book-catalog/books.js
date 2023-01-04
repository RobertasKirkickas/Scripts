// Get the form and the book list div
let addBookForm = document.getElementById('add-book-form');
let bookList = document.getElementById('book-list');

// Add an event listener to the form's submit event
addBookForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values of the form fields
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let genre = document.getElementById('genre').value;
  let reviews = document.getElementById('reviews').value;

  // Generate a unique key for the book
  let key = 'book-' + Date.now();

  // Store the book information in session storage
  sessionStorage.setItem(key + '-author', author);
  sessionStorage.setItem(key + '-title', title);
  sessionStorage.setItem(key + '-genre', genre);
  sessionStorage.setItem(key + '-reviews', reviews);

  // Clear the form fields
  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('genre').value = '';
  document.getElementById('reviews').value = '';

  // Update the book list
  updateBookList();
});

// Function to update the book list
function updateBookList() {
  // Clear the book list
  bookList.innerHTML = '';

    // Iterate through the items in session storage
  for (let i = 0; i < sessionStorage.length; i++) {
    let storageKey = sessionStorage.key(i);
    if (storageKey.endsWith("-author")) {
      let bookKey = storageKey.substring(0, storageKey.indexOf("-author")); // Extract the book key from the storage key
      let author = sessionStorage.getItem(bookKey + '-author');
      let title = sessionStorage.getItem(bookKey + '-title');
      let genre = sessionStorage.getItem(bookKey + '-genre');
      let reviews = sessionStorage.getItem(bookKey + '-reviews');
  
        // Add a list item for the book
        bookList.innerHTML += '<li>' + author + ' - ' + title + ' (' + genre + ')<br>' + reviews + '<br>';
bookList.innerHTML += '<button data-key="' + bookKey + '" class="delete-button">Delete</button>';
bookList.innerHTML += '<button data-key="' + bookKey + '" class="edit-button">Edit</button></li>';

      }
    }
  

  // Add event listeners for the delete buttons
let deleteButtons = document.getElementsByClassName('delete-button');
for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', function(event) {
    // Get the key of the book to delete
    let key = event.target.id.substring(7); // remove "delete-" from the id

    // Iterate through the keys in session storage
    for (let i = 0; i < sessionStorage.length; i++) {
      let sessionKey = sessionStorage.key(i);

      // Check if the key starts with the book's key
      if (sessionKey.startsWith(key)) {
        
        // Remove the key from session storage
        sessionStorage.removeItem(sessionKey);
      }
    }

    // Update the book list
    updateBookList();
  });
}


 // Add event listeners for the edit buttons
let editButtons = document.getElementsByClassName('edit-button');
for (let i = 0; i < editButtons.length; i++) {
  editButtons[i].addEventListener('click', function(event) {
    let key = event.target.dataset.key;
  
    // Get the current values of the book
    let author = sessionStorage.getItem(key + '-author');
    let title = sessionStorage.getItem(key + '-title');
    let genre = sessionStorage.getItem(key + '-genre');
    let reviews = sessionStorage.getItem(key + '-reviews');
  
    // Show the edit form with the current values pre-filled
    document.getElementById('edit-author').value = author;
    document.getElementById('edit-title').value = title;
    document.getElementById('edit-genre').value = genre;
    document.getElementById('edit-reviews').value = reviews;
    document.getElementById('edit-key').value = key;
    document.getElementById('edit-form').style.display = 'block';

});
}

    // Get the edit form
    let editForm = document.getElementById('edit-form');

// Add an event listener to the edit form's submit event
editForm.addEventListener('submit', function(event) {

  // Prevent the form from submitting
  event.preventDefault();

   // Get the key of the book to edit
  let key = document.getElementById('edit-key').value;

   // Get the values of the form fields
   let author = document.getElementById('edit-author').value;
   let title = document.getElementById('edit-title').value;
   let genre = document.getElementById('edit-genre').value;
   let reviews = document.getElementById('edit-reviews').value;



  // Update the book information in session storage
  sessionStorage.setItem(key + '-author', author);
  sessionStorage.setItem(key + '-title', title);
  sessionStorage.setItem(key + '-genre', genre);
  sessionStorage.setItem(key + '-reviews', reviews);

    // Hide the form
    editForm.style.display = 'none';

    
  // Update the book list
  updateBookList();

});
}    
// Update the book list
updateBookList();
