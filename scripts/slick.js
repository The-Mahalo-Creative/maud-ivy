//wait until document is ready/loaded to run jquery- safety net for best practice
$(document).ready(function() {
  //slick slider
  $('.slider-container').slick({
    // Setting name: setting-value
    autoplay: true, // Do we want it to autoplay? true or false
    autoplaySpeed: 4000, // How long between each slide when auto-playing
    speed: 500, // How fast is the transition in milliseconds
    arrows: false, // Do you want to show arrows to trigger each slide
    accessibility: true, // Enables keyboard tabbing and arrow key navigation
    dots: true, // Enables the dots below to show how many slides
    fade: false, // Changes the animate from slide to fade if true
    infinite: true, // When true, means that it will scroll in a circle
    pauseOnHover: true, // When true means the autoplay pauses when hovering
    pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
  });
  var $slider_container = $('.slider-container1');
  //slick slider
  $('.slider-container1').slick({
    // Setting name: setting-value
    autoplay: true, // Do we want it to autoplay? true or false
    autoplaySpeed: 3000, // How long between each slide when auto-playing
    speed: 500, // How fast is the transition in milliseconds
    arrows: true, // Do you want to show arrows to trigger each slide
    accessibility: true, // Enables keyboard tabbing and arrow key navigation
    dots: false, // Enables the dots below to show how many slides
    fade: true, // Changes the animate from slide to fade if true
    infinite: true, // When true, means that it will scroll in a circle
    pauseOnHover: true, // When true means the autoplay pauses when hovering
    pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
      appendArrows: $slider_container,
      // Add FontAwesome Class
        prevArrow: '<div class="slider-arrow slider-prev fa fa-chevron-left"></div>',
        nextArrow: '<div class="slider-arrow slider-next fa fa-chevron-right"></div>',
  });      
});    