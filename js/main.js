$(function () {
   $('a.menu__link, a.footer__menu-link').click(function () {
      $('html, body').animate({
         scrollTop: $($(this).attr('href')).offset().top + 'px'
      }, {
         duration: 1000,
         easing: 'swing',
      });
   });

   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('.arrow__up').fadeIn();
      } else {
         $('.arrow__up').fadeOut();
      }
   });

   $('.arrow__up').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
   });


   $('.slider__box').slick({
      prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-l.svg" alt="left">',
      nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-r.svg" alt="right">',
      responsive: [
         {
            breakpoint: 481,
            settings: {
               arrows: false
            }
         }
      ]
   });

   $('.menu-btn').click(function () {
      $('.menu__list').toggleClass('active');
   });
   $('.button.animate, .header__btn, .login').click(function () {
      $('.modal').show();
      $('body').css('overflow', 'hidden');
   });

   $('.modal__close').click(function () {
      $('.modal, .modal__photo, .modal__disk').hide();
      $('body').css('overflow', 'auto');
   });

   $('.services__btn--first').click(function () {
      $('.modal__photo').show();
      $('body').css('overflow', 'hidden');
   });
   $('.services__btn--disk').click(function () {
      $('.modal__disk').show();
      $('body').css('overflow', 'hidden');
   });

});
