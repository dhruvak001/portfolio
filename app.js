
$(document).ready(function() {
  // Initialize Slick Carousel
  $('.project-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true, // Enable default arrows
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(document).ready(function() {
    // Previous Arrow Click Handler
    $('.prev-arrow').click(function() {
        $('.project-carousel').slick('slickPrev');
    });

    // Next Arrow Click Handler
    $('.next-arrow').click(function() {
        $('.project-carousel').slick('slickNext');
    });
});


  // Previous Button Click Handler
  $('.prev-button').click(function() {
    $('.project-carousel').slick('slickPrev');
  });

  // Next Button Click Handler
  $('.next-button').click(function() {
    $('.project-carousel').slick('slickNext');
  });
});


const scrollUpButton = document.querySelector('.scroll-up');

// Add a click event listener to the scroll-up button
scrollUpButton.addEventListener('click', () => {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show or hide the scroll-up button based on scroll position
window.addEventListener('scroll', () => {
  // If the user has scrolled beyond a certain threshold, show the button
  if (window.scrollY > 300) {
    scrollUpButton.style.display = 'block';
  } else {
    // Otherwise, hide the button
    scrollUpButton.style.display = 'none';
  }
});