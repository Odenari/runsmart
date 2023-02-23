$(document).ready(function(){
  $('.carousel__inner').slick({
    dots: true,
    dotsClass:'slick-dots',
    focusOnSelect: true,
    speed: 1300,
    adoptiveHeght: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevronLeft.svg" alt="left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevronRight.svg" alt="right"></button>'
  });
});