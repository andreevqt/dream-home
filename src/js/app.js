import $ from "jquery";
import "slick-carousel";

$(() => {
  $(".main-slider").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: false
  });
});
