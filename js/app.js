$(document).ready(function() {
  console.log("%cThanks for visiting - DevTools much? Me too. -Ed", "color: #465C8B; font-size:22px;");
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