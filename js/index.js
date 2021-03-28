$(document).ready(function() {

  // slider
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  //accordion
  $(function(){
    $(".faq__list").accordion({
      collapsible: true,
      heightStyle: "content"
    });
  });

  //burger menu
  $(".header__burger").click(function() {
    if (!$(".burger__nav").hasClass("burger__nav--open")) {
      $(".burger__nav").addClass("burger__nav--open");
      $(".burger__menu").addClass("burger__menu--close");
    } else {
      $(".burger__nav").removeClass("burger__nav--open");
      $(".burger__menu").removeClass("burger__menu--close");
    }
  });

  //tabs
  $('.btns__item').each(function() {
    $(this).click( function(event) {
      $path = event.currentTarget.dataset.path;

      $('.work__step').each(function () {
        $(this).removeClass('step-active');
      });
      $(`[data-target="${$path}"]`).addClass('step-active');
    });
  });

});
