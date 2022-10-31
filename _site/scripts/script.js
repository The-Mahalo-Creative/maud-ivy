//wait until document is ready/loaded to run jquery- safety net for best practice
$(document).ready(function() {
  $(".hamburger-button").click(function() {
    $(this).toggleClass("active");
    $(".mobile-menu").fadeToggle()
});
  
  //LIGHT GALLERY POP UP
  lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
  });
  
  // Animate on scroll
  AOS.init({
    //disable: 'mobile', accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    mirror: false,
    once: false,
  });  

  //filterable gallery
  $('#portfolio-filter span').click(function(){
    
    // Remove class 'active' from any <span> that is currently active 
    $('#portfolio-filter .active').removeClass('active');
      
    // give this <span> that was clicked on a class of 'active' 
    $(this).addClass('active');
  
    // get the name of the category from this <span>, remove up to two spaces from the text and replace them with dashes, and make it lowercase 
    var filterVal = $(this).text().replace(' ','-').replace(' ','-').toLowerCase();
  
    // This is something new, it's an 'each' function which basically iterates through each element that matches the selector and applies the function one by one.
    $('.filterable-gallery .gallery-item').each(function() {
      
      // If the filter value that they have clicked on is 'all' then remove the class of hidden from each gallery-item. 
      if (filterVal == 'all') {
        $(this).removeClass('hidden');
      }
      
      // If it's not all, then 
      else {
        if($(this).hasClass(filterVal)) {
          $(this).removeClass('hidden'); // show those that have the filter class
        }
        else {
          $(this).addClass('hidden'); // hide those that do not have the filter
        }
      }
    });
  });

});
  
//  Image Lazy loading
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

// Background image lazy load
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})