$(document).ready(function () {
  $(window).on("load", function () {
    $("html, body").animate({ scrollTop: 0 }, "fast");
  });

  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });
});
