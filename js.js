document.querySelector('.section.recent').addEventListener('click', function(event) {
  if (event.target.classList.contains('toggle-button')) {
    const blogCard = event.target.closest('.blog-card');
    const currentImage = blogCard.querySelector('.current-image');
    const hiddenImage = blogCard.querySelector('.hidden-image');
    
    currentImage.classList.toggle('hidden-image');
    currentImage.classList.toggle('current-image');
    
    hiddenImage.classList.toggle('hidden-image');
    hiddenImage.classList.toggle('current-image');
  }
  
});
