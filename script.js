$(document).ready(function(){
  $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      centerMode: true,
      centerPadding: '20px', // Отступы по бокам
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  });
});

  