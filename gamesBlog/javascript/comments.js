// Comments form

// Form element
const formCom = document.querySelector('#comment-form');
// Container element where the comments will be displayed
const commentsContainer = document.querySelector('#comments-container');

// An array to store the comments
let comments = JSON.parse(localStorage.getItem('comments')) || [];

// A function to display the comments
function displayComments() {
  // Clear the comments container
  commentsContainer.innerHTML = '';

  // Loop through the comments array
  for (const comment of comments) {
    // Create a new element to display the comment
    const commentDiv = document.createElement('div');
    commentDiv.innerHTML = `
      <p><strong>${comment.name}</strong> (${comment.email})</p>
      <p>${comment.text}</p>
    `;

    // Append the comment element to the comments container
    commentsContainer.appendChild(commentDiv);
  }
}

// A function to add a comment
function addComment(event) {
  event.preventDefault(); // Prevent the form from being submitted

  // Form data
  const name = document.querySelector('#comment-name').value;
  const email = document.querySelector('#comment-email').value;
  const text = document.querySelector('#comment-text').value;

  // Add the comment to the comments array
  comments.push({ name, email, text });
  localStorage.setItem('comments', JSON.stringify(comments));

  // Display the comments
  displayComments();

  // Reset the form
  formCom.reset();
}

// Add an event listener to submit the comment
formCom.addEventListener('submit', addComment);






  