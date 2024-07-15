function toggleModal(show) {
    const modal = document.getElementById('form-modal');
    modal.style.display = show ? 'block' : 'none';
  }
  
  function openNewTab(url) {
    window.open(url, '_blank');
  }
  


  let currentSlideIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  const slidesToShow = 4;
  const totalMovableSlides = totalSlides - slidesToShow;
  
  function showSlide(index) {
    currentSlideIndex = (index + totalMovableSlides + 1) % (totalMovableSlides + 1);
    const offset = currentSlideIndex * -25;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
  }
  
  function moveSlide(n) {
    showSlide(currentSlideIndex + n);
  }
  
  // Initial call to display the first slide
  showSlide(currentSlideIndex);
  