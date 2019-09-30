$(function(){
  $('.navigation-hamburger').on('click', function (event) {
    var $this = $(event.currentTarget);
    var $nav = $this.parent();

    $nav.toggleClass('open');
  })
});

$(function(){
  $('.pre-header-search__icon').on('click', function (event) {
    var $this = $(event.currentTarget);
    var $parent = $this.parent();

    $parent.toggleClass('open');
  })
});