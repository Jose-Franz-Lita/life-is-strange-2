// Inject episode images into the DOM after React renders
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for React to render
  setTimeout(function() {
    const episodes = [
      { number: 1, image: '/episode1.jpg' },
      { number: 2, image: '/episode2.png' },
      { number: 3, image: '/episode3.png' },
      { number: 4, image: '/episode4.jpg' },
      { number: 5, image: '/episode5.png' }
    ];

    // Find all episode cards
    const episodeCards = document.querySelectorAll('.episode-card');
    
    episodeCards.forEach((card, index) => {
      if (index < episodes.length) {
        const episode = episodes[index];
        
        // Check if image container already exists
        if (!card.querySelector('.episode-image-container')) {
          // Create image container
          const imageContainer = document.createElement('div');
          imageContainer.className = 'episode-image-container';
          
          // Create image element
          const img = document.createElement('img');
          img.className = 'episode-image';
          img.src = episode.image;
          img.alt = `Episode ${episode.number}`;
          
          // Append image to container
          imageContainer.appendChild(img);
          
          // Insert container at the beginning of the card
          card.insertBefore(imageContainer, card.firstChild);
        }
      }
    });
  }, 500);
});
