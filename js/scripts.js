// Twitter
! function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) { js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'twitter-wjs');


$(document).ready(function() {
  //alert("Document is ready!");
  $('.message-box').css('border', '2px solid red');
  $('.form-control').css('background', '#fff');
  $('.form-control').css('border', '2px solid #2b4163');
  // smooth scrolling 
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function() {
        window.location.hash = href;
    });
    return false;
  });

  // stellar
  $.stellar();

  // Tooltips
  $(function() {
      $('[data-toggle="tooltip"]').tooltip();
  });

  $('#top-image').stellar({});

  $('#contactpagebody').stellar({});

  $(function() {
      $('#school').tooltip();
  });

  $('#button').on('click', function() {
    console.log('clicked');

    var comment = $('.message-box').val();
    console.log(comment);

    if (comment === "") {
        $('.message-box').css('border', '2px solid red');
    } else {
      $('#visible-comment').html(comment);
      $('.message-box').hide();

      var name = $('#name').val();
      console.log(name);
      $('#visible-name').html(name);
      $('#name').hide();

      var email = $('#email').val();
      $('#visible-email').html(email);
      $('#email').hide();

      var phone = $('#phone').val();
      $('#visible-phone').html(phone);
      $('#phone').hide();
      alert('We have recieved your message!');
    }
    return false;
  });

  //left off here
  $('.message-box').on('keyup', function() {
    console.log('keyup happened');
    var nameName = 3;
    var name = 'string';
    var charCount = $('.message-box').val().length;
    50;
    console.log(charCount);
    $('#char-count').html(charCount); //running number count
    if (charCount > 50) {
      $('#char-count').css('color', 'red') //turn red
    } else {
      $('#char-count').css('color', 'black') //stay black
    };
  });

  //work section
  for (var i = 0; i < works.length; ++i ) {
    $('#work1').append("\
      <div class='col-md-4 col-xs-8'>\
        <a href=' " + works[i].url + " ' class='work-img'>\
          <img src=' " + works[i].pic + " ' class='img-responsive' alt='mywork'>\
          <span class='info'> " + works[i].title + " \
          </span>\
        </a>\
      </div>\
      ");

    $('.work-img').mouseenter( function() {
      $('.info', this).show(400);
      $('.info').css('color', 'red');
    }).mouseleave(function() {
      $('.info', this).hide();
    });

    var images = $('#work1 img'); {
      $(images[i]).css('border', '2px solid #223451');
      $(images[i]).css('filter', 'grayscale(100%)');
    } 
  };
});

// maps goes here
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.731059, lng: -73.997927}, 
    zoom: 8
  });
  console.log('Hello!');
  var Marker = new google.maps.Marker({
    position: {lat: 40.731059, lng: -73.997927}, 
    map: map, 
    title: 'Hello World',
    label: 'Hello!'
  });
}


