$(document).ready(function() {

  $(window).load(function() {
    $('#carousel').fadeOut(50);
    $('#status').fadeOut(1000);
    $('#preloader').delay(350).fadeOut('slow');
  });

  $('.index-learn-more').click(function() {
    $('.index-subtitle').delay(100).fadeOut(500);
    $('a.index-learn-more').delay(100).fadeOut(500);
    $('#carousel').delay(100).fadeIn(1500);

    $('.index-title').animate({top: "-30px"}, 800, "swing");
    $('footer').animate({marginTop: "180px"}, 800, "swing");
  });

  $('.index-regis-btn').click(function() {
    // var emailToTry = $('input.index-field').val();
    // var request = new XMLHttpRequest();
    // var params = "query=" + emailToTry;
    // request.open('POST', '/emailtest?' + params, true);
    // request.onreadystatechange = function() {
    //   if (this.readyState == 4) {
    //     if (this.status == 200) {
    //       if (this.responseText !== '') {
    //         $('.index-alert-success .index-carousel-alert-text').text('Hi, ' + this.responseText);
    //         $('.index-alert-success').show()
    //         $('.index-alert-failure').hide()
    //       } else {
    //         $('.index-alert-failure').show()
    //         $('.index-alert-success').hide()
    //       }
    //     } else {
    //       $('.index-alert-failure').show()
    //       $('.index-alert-success').hide()
    //       return;
    //     }
    //   }
    // }
    // request.send();
    $('.index-alert-success .index-carousel-alert-text').text('Stanford email successfully saved!');
    $('.index-alert-success').show()
  });

  $('dropdown-toggle').dropdown()
});