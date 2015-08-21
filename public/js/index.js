$(document).ready(function() {

  $(window).load(function() {
    $('#status').fadeOut(1000);
    $('#preloader').delay(350).fadeOut('slow');
  });

  $('.index-learn-more').click(function() {
    $('.index-subtitle').delay(100).fadeOut(1500);
    $('a.index-learn-more').delay(100).fadeOut(1500);

    move('.index-title').set('margin-top', 150).end();
    move('.index-subimage').set('margin-bottom', -550).end(function() {
      console.log("This finished");
    });
  });
});