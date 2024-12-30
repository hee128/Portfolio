$(function(){

       //========= site 슬라이드
   const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    // loop: 'true',

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });


//   ==================사이트 설명

  $('.box .more').click(function(){
    $('.box .content').fadeIn()
  })

  $('.box .x').click(function(){
    $('.box .content').fadeOut()
  })

  $('.box2 .more').click(function(){
    $('.box2 .content').fadeIn()
  })

  $('.x').click(function(){
    $('.content').fadeOut()
  })




// =======================소개

  $('.c1').mouseover(function(){
    $('.c1 h3').hide()
    $('.cardt1').show()
  })


  $('.c1').mouseout(function(){
    $('.cardt1').hide()
    $('.c1 h3').show()

  })

  $('.c2').mouseover(function(){
    $('.c2 h3').hide()
    $('.cardt2').show()
  })


  $('.c2').mouseout(function(){
    $('.cardt2').hide()
    $('.c2 h3').show()

  })

  $('.c3').mouseover(function(){
    $('.c3 h3').hide()
    $('.cardt3').show()
  })


  $('.c3').mouseout(function(){
    $('.cardt3').hide()
    $('.c3 h3').show()

  })
});
