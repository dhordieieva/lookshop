$(function() {
  $('.navigation-hamburger').on('click', function (event) {
    var $this = $(event.currentTarget);
    var $nav = $this.parent();

    $nav.toggleClass('open');
  });

  $(document).on('click', function (e) {
    var div = $('.navigation-hamburger');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {

      div.removeClass('open').parent().removeClass('open');
    }
  });

  $('.pre-header-search__icon').on('click', function (event) {
    var $this = $(event.currentTarget);
    var $parent = $this.parent();

    $parent.toggleClass('open');
  });

  $('.footer-hamburger').on('click', function (event) {
    var $this = $(event.currentTarget);
    var $parent = $this.parent();
    $this.toggleClass('open');
    $parent.toggleClass('open');
  });

  $(document).on('click', function (e) {
    var div = $('.footer-hamburger');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {

      div.removeClass('open').parent().removeClass('open');
    }
  });

  $('.btn--catalog-sidebar').on('click', function (event) {
    var $this = $(event.currentTarget);
    var $parent = $this.parent();
    $this.toggleClass('open');
    $parent.toggleClass('open');
  });

  $('.js-counter .js-counterbtn-up').on('click', function (ev) {
    var $this = $(ev.currentTarget);
    var input = $this.parent('.js-counter').find('.js-counter-inp')[0];
    input.stepUp();
  });

  $('.js-counter .js-counterbtn-down').on('click', function (ev) {
    var $this = $(ev.currentTarget);
    var input = $this.parent('.js-counter').find('.js-counter-inp')[0];
    input.stepDown();
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


  var swiper = new Swiper('.product-slider', {
    slidesPerView: 1,
    spaceBetween: 5,
    speed: 1000,
    loop: true,
    pagination: {
      el: '.product-slider__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.product-slider__btn--next',
      prevEl: '.product-slider__btn--prev',
    },
  });


  function generateOfferSlider(sliderClass, btnPrevClass, btnNextClass) {
    return new Swiper(sliderClass, {
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 300,
      loop: true,
      navigation: {
        nextEl: btnPrevClass,
        prevEl: btnNextClass,
      },
      breakpoints: {
        641: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 4,
        },
        993: {
          slidesPerView: 5,
          centeredSlides: true,
          slidesOffsetBefore: 0,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
          slidesOffsetBefore: 120,
        }
      }
    });
  }

  var offerHot = generateOfferSlider(
    '.offer-slider-hot',
    '.offer-slider__btn--next-hot',
    '.offer-slider__btn--prev-hot');

  var offerDesigners = generateOfferSlider(
    '.offer-slider-designers',
    '.offer-slider__btn--next-designers',
    '.offer-slider__btn--prev-designers');

  var offerFeatured = generateOfferSlider(
    '.offer-slider-featured',
    '.offer-slider__btn--next-featured',
    '.offer-slider__btn--prev-featured');


  var offerLatest = generateOfferSlider(
    '.offer-slider-latest',
    '.offer-slider__btn--next-latest',
    '.offer-slider__btn--prev-latest');

  function updateTabsOfferSliders() {
    offerHot.update();
    offerDesigners.update();
    offerFeatured.update();
    offerLatest.update();
  }

  $('.nav-tabs__link').on('shown.bs.tab', updateTabsOfferSliders);
  $('.nav-tab-mobile__link').on('shown.bs.tab', updateTabsOfferSliders);
  $('.nav-tab-mobile__link').on('click', function (event) {
    var $this = $(event.currentTarget);
    $('.nav-tab-mobile__dropdown').find('.dropdown-toggle__text').text($this.text());
  });

  var galleryThumbs = new Swiper('.product-gallery-thumbs', {
    spaceBetween: 13,
    slidesPerView: 4,
    // loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.product-gallery-big', {
    spaceBetween: 10,
    // loop:true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    }
  });

  var intervalId = null;
  $('.js-play').on('click', function () {
    if (!intervalId) {
      intervalId = setInterval(function() {
        galleryTop.slideNext();
      }, 1000);
    }
  });

  $('.js-pause').on('click', function () {
    clearInterval(intervalId);
    intervalId = null
  });


  $(".js-range-slider").ionRangeSlider();

  $('.js-select').select2({
    minimumResultsForSearch: -1,
  });
  $('.js-select-search').select2();
});