// Objects for saved item/s
let items = {
  calisto: {
    src: 'wallpapers/calisto.jpg',
    alt: 'Callisto Protocol',
    width: 920,
    height: 580
  },
  elden: {
    src: 'wallpapers/elden.jpg',
    alt: 'Elden Ring',
    width: 920,
    height: 580
  },
  tes: {
    src: 'wallpapers/tes.jpg',
    alt: 'The Elder Scrolls',
    width: 920,
    height: 580
  },
  gta: {
    src: 'wallpapers/gta.jpg',
    alt: 'Grand Theft Auto',
    width: 920,
    height: 580
  },
  runescape: {
    src: 'wallpapers/runescape.png',
    alt: 'RuneScape',
    width: 920,
    height: 580
  }
};

let savedItems = {}; // Saves items here
let savedCount = 0; // Counts how many items saved

function saveForLater(event) {
  let itemId = event.target.parentElement.querySelector('img').dataset.id;
  savedItems[itemId] = items[itemId]; // Add the item to the savedItems object
  localStorage.setItem('savedItems', JSON.stringify(savedItems)); // Save the savedItems object to localStorage
  savedCount++;
  alert(`Item added to "Saved Items". You have ${savedCount} items in your saved items list. You can view your saved items by clicking on the [Saved Items] in navigation meniu.`);
}

function displaySavedItems() {
  let savedItemsDiv = document.querySelector('#saved-items'); // Element to display the saved items

  // Get the saved items from localStorage
  savedItems = JSON.parse(localStorage.getItem('savedItems'));

  // Loop through the items in the savedItems object
  for (const itemId in savedItems) {
    let item = savedItems[itemId];

    // Create a new element to display the item
    let itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<img src="${item.src}" alt="${item.alt}" width="320" height="180">`;
  

    // Append the item element to the saved items div
    savedItemsDiv.appendChild(itemDiv);
  }
}

