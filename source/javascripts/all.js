//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
 // the DOM is now ready, you can traverse it,
 // and register events with on().

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

  // Hide navbar when 200px are scrolled
  // $(window).scroll(function() {
  //     if ($(this).scrollTop() > 200) { //use `this`, not `document`
  //         $('.navbar').css({
  //             'display': 'none'
  //         });
  //     }
  // });

  // toggle fadeIn/Out
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

});