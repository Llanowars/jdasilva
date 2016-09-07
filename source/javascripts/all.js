//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {

  // Smooth scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // navbar fadeIn/Out
  var vH = $(window).height();
  $(window).scroll(function() {
      if ($(this).scrollTop() > vH - 5)
       {
          $('.navbar').fadeIn();
          $('.navbar').removeClass("hidden");
       }
      else
       {
        $('.navbar').fadeOut();
       }
   });

  // navbar addClass/removeClass on click
  $(function() {
      $('.navbar li a').click(function() {
         $('.navbar li a').removeClass();
         $(this).addClass('active-nav');
      });
   });
  
  // navbar addClass/removeClass on scroll
  $(window).scroll(function() {

    if ($(this).scrollTop() >= $('.profile').offset().top) {
      $('.navbar li a').removeClass('active-nav');
      $('.navbar li a:eq(0)').addClass('active-nav');
    }
    if ($(this).scrollTop() >= $('.abilities').offset().top) {
      $('.navbar a').removeClass('active-nav');
      $('.navbar a:eq(1)').addClass('active-nav');
    }
  });

});