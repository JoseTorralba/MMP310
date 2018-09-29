$(document).ready(function () {
  // Scroll animation
  $("a.scroll").click(function (event) {
    event.preventDefault();

    $("html, body").animate({ 
      scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
  });

  // Navbar Toggle
  $('.navigation__toggle--icon').click(function() {
    $('.navigation__nav').toggleClass('navigation__active');
  });

  $('.navigation__item').click(function() {
      $('.navigation__nav').removeClass('navigation__active');
  });

  // When Nav Item is clicked (work on later)

  // const home = document.getElementById('home-active')

  // home.onclick = function() {
  //     home.className = 'active-nav';
  // }


// Animsition
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 700,
    outDuration: 700,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});