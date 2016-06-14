$(window).load(function(){
    
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 130,
    itemMargin: 50,
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

  //Setting background image, class and blockquotes on load
  var backgroundImage = $('.slides li:first-child a').prev('img').attr('src');
  $('#content-area').css('background-image', 'url('+backgroundImage+')');
  $('#content-area .blockquote').append('"'+$('.slides li:first-child a').attr('data-quote')+'"');
  $('#content-area .blockquote-author').append('- '+ $('.slides li:first-child a').attr('data-author'));
  $('.slides li:first-child').addClass('flex-active-slide');

  // Changing background images, class and blockquote on click
  $('.slides li a ').click(function(event){
    event.preventDefault;
    $('#content-area').hide();
    $('#content-area .blockquote').empty();
    $('#content-area .blockquote-author').empty();
    $('.slides li').removeClass('flex-active-slide');
    $(this).closest('li').addClass('flex-active-slide')
    var blockquote = $(this).attr('data-quote');
    var author = $(this).attr('data-author');
    var backgroundImage = $(this).prev('img').attr('src');
    $('#content-area .blockquote').append('"'+blockquote+'"');
    $('#content-area .blockquote-author').append('- ' + author);
    $('#content-area').css('background-image', 'url('+backgroundImage+')');
    $('#content-area').fadeIn();
  });

});
