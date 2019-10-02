$(function(){
  $('.navigation-hamburger').on('click', function (event) {
    var $this = $(event.currentTarget);
    var $nav = $this.parent();

    $nav.toggleClass('open');
  });

  $('.pre-header-search__icon').on('click', function (event) {
    var $this = $(event.currentTarget);
    var $parent = $this.parent();

    $parent.toggleClass('open');
  });

  var swiper = new Swiper('.main-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    pagination: {
      el: '.main-slider__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.main-slider__btn--next',
      prevEl: '.main-slider__btn--prev',
    },
  });


});