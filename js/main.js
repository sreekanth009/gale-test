$(window).load(function(){
    
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 160,
    itemMargin: 40,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "fade",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    directionNav: false,
    sync: "#carousel",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });

  $(".image-carousel li span").hover(
    function(){
      $(this).find('a').animate({
         height:'100%'
      },'fast');

    },
    function() {
      $(this).find('a').animate({
         height: '38px'
      },'fast');
    });

});
