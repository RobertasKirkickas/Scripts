// This function generates random Chuck Norris joke and outputs to HTML file

const getJoke = document.getElementById('getJoke'); // button to generate a joke
const jokeDiv = document.getElementById('joke'); // saves generated joke here

getJoke.addEventListener('click', () => { // on click generates a joke
  fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json()) // makes as a string
    .then(data => { // gets value
      jokeDiv.innerHTML = data.value; // sends to HTML file
    });
});

