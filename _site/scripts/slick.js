//wait until document is ready/loaded to run jquery- safety net for best practice
$(document).ready(function() {
  //slick slider
  $('.slider-container').slick({
    // Setting name: setting-value
    autoplay: false, // Do we want it to autoplay? true or false
    autoplaySpeed: 4000, // How long between each slide when auto-playing
    speed: 500, // How fast is the transition in milliseconds
    arrows: false, // Do you want to show arrows to trigger each slide
    accessibility: true, // Enables keyboard tabbing and arrow key navigation
    dots: true, // Enables the dots below to show how many slides
    fade: false, // Changes the animate from slide to fade if true
    infinite: true, // When true, means that it will scroll in a circle
    pauseOnHover: true, // When true means the autoplay pauses when hovering
    swipeToSlide: false, //stops dragging
    pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
  });    
});    