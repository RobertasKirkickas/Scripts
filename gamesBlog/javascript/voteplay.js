// Vote play form
const formPoll = document.querySelector('#poll-form');
const pollResults = document.querySelector('#poll-results');

formPoll.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from being submitted

  // Get the selected vote value
  const vote = document.querySelector('input[name="vote"]:checked').value;

  // Update the poll results
  let votesYes = localStorage.getItem('votesYes');
  let votesNo = localStorage.getItem('votesNo');
  if (vote === 'Yes') {
    if (votesYes === null) {
      votesYes = 1;
    } else {
      votesYes++;
    }
    localStorage.setItem('votesYes', votesYes);
  } else {
    if (votesNo === null) {
      votesNo = 1;
    } else {
      votesNo++;
    }
    localStorage.setItem('votesNo', votesNo);
  }

  // Display the updated poll results
  pollResults.innerHTML = `Yes: ${votesYes || 0} No: ${votesNo || 0}`;

  // Hide the form
  formPoll.style.display = 'none';
});

// If the poll results are already stored in session storage, display them
if (localStorage.getItem('votesYes') !== null || localStorage.getItem('votesNo') !== null) {
  const votesYes = localStorage.getItem('votesYes');
  const votesNo = localStorage.getItem('votesNo');
  pollResults.innerHTML = `Yes: ${votesYes || 0} No: ${votesNo || 0}`;
  formPoll.style.display = 'none';
}
