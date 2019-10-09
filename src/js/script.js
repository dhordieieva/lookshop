$(function() {
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

});