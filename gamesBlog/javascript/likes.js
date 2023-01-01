// Initialize the like counts when the page loads
window.addEventListener('load', function() {
  const wallpapers = document.querySelectorAll('.wallp');
  wallpapers.forEach(function(wallpaper) {
    const id = wallpaper.querySelector('img').dataset.id;
    const likeCount = localStorage.getItem(`likes-${id}`) || 0;
    wallpaper.querySelector('.like-count').textContent = `${likeCount} Likes`;
    if (likeCount > 0) {
      wallpaper.querySelector('.like-button').style.display = 'none';
    }
  });
});

// Like a wallpaper function
function likeWallpaper(event) {
  // Get the wallpaper element and ID
  const wallpaper = event.target.parentNode;
  const id = wallpaper.querySelector('img').dataset.id;

  // Increment the like count
  let likeCount = localStorage.getItem(`likes-${id}`) || 0;
  likeCount++;
  localStorage.setItem(`likes-${id}`, likeCount);

  // Update the like count element
  wallpaper.querySelector('.like-count').textContent = `${likeCount} Likes`;

  // Hide the like button
  wallpaper.querySelector('.like-button').style.display = 'none';
  
}

// Add the "likeWallpaper" function as an event listener for the "like" button
document.querySelectorAll('.like-button').forEach(function(button) {
  button.addEventListener('click', likeWallpaper);
});
