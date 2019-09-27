$(function(){
  $('.navigation-hamburger').on('click', function (event) {
    var $this = $(event.currentTarget);
    var $nav = $this.parent();

    $nav.toggleClass('open');
  })
});