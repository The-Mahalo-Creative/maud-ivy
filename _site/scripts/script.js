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

// MUSIC PLAYER
let audioPlayers = document.querySelectorAll(".audio-player");
if (audioPlayers.length) {
  audioPlayers.forEach(function(audioPlayer, i) {
    let audio = audioPlayer.querySelector("audio");
    let playerButton = audioPlayer.querySelector(".player-button");
    playerButton.addEventListener("click", function(e) {
      let current = e.currentTarget;
      let audio = current.closest(".audio-player").querySelector("audio");
      let btnSvg = current.querySelector(".useBtn");
      if (!audio.paused) {
        btnSvg.setAttribute("href", "#icon-play");
        audio.pause();
      } else {
        btnSvg.setAttribute("href", "#icon-pause");
        audio.play();
      }
    });

    let timeline = audioPlayer.querySelector('.timeline');
    function changeTimelinePosition () {
      const percentagePosition = (100*audio.currentTime) / audio.duration;
      timeline.style.backgroundSize = `${percentagePosition}% 100%`;
      timeline.value = percentagePosition;
    }    

    audio.ontimeupdate = changeTimelinePosition; 

    function audioEnded () {
      playerButton.innerHTML = playIcon;
    }    

    audio.onended = audioEnded; 

    function changeSeek () {
      const time = (timeline.value * audio.duration) / 100;
      audio.currentTime = time;
    }    

    timeline.addEventListener('change', changeSeek);

    let soundButton = audioPlayer.querySelector('.sound-button');
    function toggleSound () {
      audio.muted = !audio.muted;
      soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
    }

    soundButton.addEventListener('click', toggleSound);
  });
  const muteIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#d09797">
      <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>`;
}
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