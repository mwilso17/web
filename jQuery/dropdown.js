$(document).ready(function() {
  var el = document.getElementById('text');

  $('[data-trigger="dropdown"]').on('mouseenter', function() {
    var submenu = $(this).parent().find('.submenu');
    submenu.addClass('active');

    $('.profile-menu').on('mouseleave', function() {
      submenu.removeClass('active');
    })

  });
});