$('.playbutton,img').click(function(){
    var video = '<div class="video-container"><iframe allow="fullscreen;" src="'+$('img').attr('data-video') +'"></iframe></div>';
    $('.video').hide();
    $('.tube').html(video);
    $('.close').show();
  });
  $('.close').click(function(){
    $('.video').show();
    $('.tube').empty();
    $('.close').hide();
  });