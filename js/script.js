$(document).ready(function(){

  // AOS 호출
  AOS.init();

  //스와이퍼
  var swiper = new Swiper(".mySwiper", {
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        1199: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
    
        },
        760: {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
    
        }

      }
    });

  // 헤더 스크롤이벤트
  var ww = $(window).width();

  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      $('.header-area').addClass('active');
      $('.header-logo').addClass('active');
    }else{
      $('.header-area').removeClass('active');
      $('.header-logo').removeClass('active');
    }
  });


  // 햄버거버튼
  $('.hamburger').click(function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
  });


}); //end