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

  var offerHot = new Swiper('.offer-slider-hot', {
    slidesOffsetBefore: 120,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 300,
    loop: true,
    navigation: {
      nextEl: '.offer-slider__btn--next-hot',
      prevEl: '.offer-slider__btn--prev-hot',
    },
  });

  var offerDesigners = new Swiper('.offer-slider-designers', {
    slidesOffsetBefore: 120,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 300,
    loop: true,
    navigation: {
      nextEl: '.offer-slider__btn--next-designers',
      prevEl: '.offer-slider__btn--prev-designers',
    },
  });

  var offerFeatured = new Swiper('.offer-slider-featured', {
    slidesOffsetBefore: 120,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 300,
    loop: true,
    navigation: {
      nextEl: '.offer-slider__btn--next-featured',
      prevEl: '.offer-slider__btn--prev-featured',
    },
  });

  var offerLatest = new Swiper('.offer-slider-latest', {
    slidesOffsetBefore: 120,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 300,
    loop: true,
    navigation: {
      nextEl: '.offer-slider__btn--next-latest',
      prevEl: '.offer-slider__btn--prev-latest',
    },
  });

  $('.offers .nav-tabs__link').on('shown.bs.tab', function (e) {
    offerHot.update();
    offerDesigners.update();
    offerFeatured.update();
    offerLatest.update();
  })

});