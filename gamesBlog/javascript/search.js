// Search form

const formSearch = document.querySelector('#search-form');

formSearch.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from being submitted

  // Get the search query
  const query = document.querySelector('#search-input').value;

  // Redirect the user to the search page with the search query as a URL parameter
  window.location.href = `search.html?query=${query}`;
});

