// Contact form
const formMsg = document.querySelector('#messageForm');

formMsg.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from being submitted

  // Get the form data
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Displays confirmation message
  alert(`Thank you for your message, ${name}! We will get back to you at ${email} as soon as possible.`);
  alert(`Your message was: \n ${message}`);

  // Reset the form fields
  formMsg.reset();
});

