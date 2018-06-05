//Scroll to top
$(document).ready(function () {
  var ww = document.body.clientWidth;
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#pagetop').fadeIn();
    } else {
      $('#pagetop').fadeOut();
    }
  });

  $('#pagetop img').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

// header fixed

$(function () {
  headerPadding();
  $(window).resize(function () {
    headerPadding();
  });

  function headerPadding() {
    var position = $('#header #gnav').css('position');
    var ww = document.body.clientWidth;
    if (ww > 767) {
      if (position == 'fixed') {
        var h = $('#gnav').height();
        $('#header').css({
          "padding-top": h
        });
      } else {
        $('#header').css({
          "padding-top": 'initial'
        });
      }
    }
  }
});

$(document).ready(function () {
  var defPos = 0;
  $(window).scroll(function () {
    var currentPos = $(this).scrollTop();
    if (currentPos > defPos) {
      if ($(window).scrollTop() >= 400) {
        var hh = $("#header").height();
        $("#header").css("top", "-" + hh + "px");
      }
    } else {
      $("#header").css("top", 0 + "px");
    }
    defPos = currentPos;
  });
});

$(function () {
  setTimeout(aTagDefault, 500);
});

function aTagDefault() {
  var allA = document.getElementsByTagName("a").length;
  var aTag = document.getElementsByTagName("a");
  var mp = 767;
  for (var i = 0; i < allA; i++) {
    var rel = aTag[i].rel;
    if (rel != "") {
      aTag[i].removeAttribute("rel");
      aTag[i].setAttribute("href", rel);
    }
  }
  if ($(window).width() > mp) {
    var hash = location.hash;
    if (hash != "") {
      var top = $(hash).offset().top;
      var topPlus = $("#header").outerHeight(true);
      top = top - topPlus;
      $("html,body").animate({
        scrollTop: top
      });
    }
  }
  $("a").on("click", function () {
    if ($(window).width() > mp) {
      var url = $(this).attr("href").match(/#.*$/);
      url = url[0];
      if (url != "") {
        var top = $(url).offset().top
        var topPlus = $("#header").outerHeight(true);
        top = top - topPlus;
        $("html, body").animate({
          "scrollTop": top
        });
      }
    }
  });
}

$(document).ready(function () {
  $('#menu_button').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
      $('#gnav').css('display', 'block');
      $('#header').css('background', '#004f43');
    } else {
      $(this).removeClass('open');
      $('#gnav').css('display', 'none');
      $('#header').css('background', '#fff');
    }
  });
  $('.nav li a').click(function () {
    $('#menu_button').removeClass('open');
    $('#gnav').css('display', 'none');
    $('#header').css('background', '#fff');
  })
});

$(window).bind('resize orientationchange', function () {
  $('#menu_button').removeClass('open');
  $('#header').css('background', '#fff');
  $('#gnav').css('display', 'none');
});
