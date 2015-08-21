$(document).ready(function() {

  $(window).load(function() {
    $('#carousel').fadeOut(50);
    $('#status').fadeOut(1000);
    $('#preloader').delay(350).fadeOut('slow');
  });

  $('.index-learn-more').click(function() {
    $('.index-subtitle').delay(100).fadeOut(1500);
    $('a.index-learn-more').delay(100).fadeOut(1500);
    $('#carousel').delay(100).fadeIn(1500);

    $('.index-title').animate({top: "-30px"});
    $('footer').animate({bottom: "-100px"});
  });
});