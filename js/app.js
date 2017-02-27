$(document).ready(function() {
  $('#head').hide();
  $('.pageHTML').fadeIn(400);
  $('#head').show();
  navToggle();
});

function navToggle() {
  $(document).click(function(event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      $navbar.collapse('hide');
    }
  });
};