requirejs.config({
  baseUrl: '../bower_components',
  paths: {
    main: '../src/main',
    jade: 'jade/runtime',
    templates: '../templates',
    jquery: 'jquery/jquery'
  }
});

require(['jquery'], function ($) {
  var $container = $('#container');
  var $subNav = $('.nav-expanded');
  var $dotdotdot = $('.dotdotdot');
  var navHeight = $subNav.height();
  var collapsedHeight = 40;

  $subNav.css('height', collapsedHeight);
  $subNav.attr('data-expanded', 'false');
  $container.attr('data-loading', 'done');
  $dotdotdot.on('click', function () {
    var isExpanding = $subNav.attr('data-expanded') === 'false';
    var height = isExpanding ? navHeight : collapsedHeight;
    $('.nav-expanded').animate({
      height: height
    }, 200);
    $subNav.attr('data-expanded', isExpanding);
  });

  function isMobile() {
    var w = window.innerWidth;
    if (w < 1020) {
      document.body.setAttribute('data-mobile', true);
    } else {
      document.body.setAttribute('data-mobile', false);
    }
  }

  $(window).on('resize', isMobile);
  isMobile();

});
