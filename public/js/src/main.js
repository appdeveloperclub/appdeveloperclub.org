$(document).ready(function() {

  /**
   * Resizing group containers to match window height.
   */
  $(window).load(function() {
    if ($('.members').length)
      $('.members').height($(this).height() - 60);
    if ($('.projects').length)
      $('.projects').height($(this).height() - 60);
  });


  /**
   * Index page loading styles.
   */
  $(window).load(function() {
    $('#carousel').fadeOut(50);
    $('#status').fadeOut(1000);
    $('#preloader').delay(350).fadeOut('slow');
  });


  /**
   * Learn more button animations.
   */
  $('.index-learn-more').click(function() {
    $('.index-subtitle').delay(100).fadeOut(500);
    $('a.index-learn-more').delay(100).fadeOut(500);
    $('#carousel').delay(100).fadeIn(1500);
    $('.index-title').animate({top: "-30px"}, 800, "swing");
    $('footer').animate({marginTop: "180px"}, 800, "swing");
  });


  /**
   * API for StanfordWHO.
   */
  $('.index-regis-btn').click(function() {
    var emailToTry = $('input.index-field').val();
    var request = new XMLHttpRequest();
    var params = "query=" + emailToTry;
    request.open('POST', '/emailtest?' + params, true);
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          if (this.responseText !== '') {
            $('.index-alert-success .index-carousel-alert-text').text('Hi, ' + this.responseText);
            $('.index-alert-success').show()
            $('.index-alert-failure').hide()
          } else {
            $('.index-alert-failure').show()
            $('.index-alert-success').hide()
          }
        } else {
          $('.index-alert-failure').show()
          $('.index-alert-success').hide()
          return;
        }
      }
    }
    request.send();
    $('.index-alert-success .index-carousel-alert-text').text('Stanford email successfully saved!');
    $('.index-alert-success').show()
  });


  /**
   * Parent container font resizing.
   */
  $('.member-name').fitText();
  $('.project-name').fitText();


  /**
   * Resizing group containers to match window height.
   */
  $(window).resize(function() {
    if ($('.members').length)
      $('.members').height($(this).height() - 60);
    if ($('.projects').length)
      $('.projects').height($(this).height() - 60);
  });
});