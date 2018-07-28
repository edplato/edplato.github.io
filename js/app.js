$(document).ready(function() {
  console.log("%cThanks for visiting - DevTools much? Me too. -Ed", "color: #465C8B; font-size:22px;");
  navToggle();
  fetch('https://flickpick.herokuapp.com/', {mode: 'no-cors'})
    .then((res) => console.log('Wake up Flick Pick heroku live dyno.'));
  fetch('https://mst3kquickguide.herokuapp.com/', {mode: 'no-cors'})
    .then((res) => console.log('Wake up MST3K heroku live dyno.'));
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