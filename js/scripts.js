$(document).ready(function() {
  //Smooth Scroll for Anchors
  jQuery('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = jQuery(target);
    jQuery('html, body').stop().animate({
      'scrollTop': $target.offset().top - 64}, 700);
  });
});