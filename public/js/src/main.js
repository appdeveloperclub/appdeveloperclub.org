$(document).ready(function() {

  /**
   * Resizing group containers to match window height.
   */
  $(window).load(function() {
    if ($('.members').length)
      $('.members').height($(this).height() - 60);
    if ($('.projects').length)
      $('.projects').height($(this).height() - 60);
    if ($('.core-members').length)
      $('.core-members').height($(this).height() - 60);
    if ($('.advisors').length)
      $('.advisors').height($(this).height() - 60);
    // if ($('.profile').length)
    //   $('.profile').height($(this).height() - 60);
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
  $('.nav-regis-btn').click(function() {
    var emailToTry = $('input.nav-field').val();
    var request = new XMLHttpRequest();
    var params = "query=" + emailToTry;
    request.open('POST', '/emailtest?' + params, true);
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          if (this.responseText !== '') {
            alertify.alert('Hi, ' + this.responseText);
            $('.nav-registration').show()
            $('.nav-authentication').hide()
          } else {
            alertify.error('We could not find you in the Stanford database.');
            $('.nav-authentication').show()
            $('.nav-registration').hide()
          }
        } else {
          alertify.error('Something went wrong. We ran into an error.');
          $('.nav-authentication').show()
          $('.nav-registration').hide()
          return;
        }
      }
    }
    request.send();
  });


  /**
   * Parent container font resizing.
   */
  $('.member-name').quickfit({ max: 35, min: 18, truncate: false });
  $('.project-name').quickfit({ max: 35, min: 18, truncate: false });
  $('.core-member-name').quickfit({ max: 35, min: 18, truncate: false });
  $('.advisor-name').quickfit({ max: 35, min: 18, truncate: false });


  /**
   * Resizing group containers to match window height.
   */
  $(window).resize(function() {
    if ($('.members').length)
      $('.members').height($(this).height() - 60);
    if ($('.projects').length)
      $('.projects').height($(this).height() - 60);
    if ($('.core-members').length)
      $('.core-members').height($(this).height() - 60);
    if ($('.advisors').length)
      $('.advisors').height($(this).height() - 60);
  });


  /**
   * Adding creator button handler.
   */
  $('.new-member-button').click(function() {
    var creatorName = $('.new-member-input').val();
  });
});