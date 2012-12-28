$(function(){

  // @see: https://dev.twitter.com/docs/api/1/get/search
  $.twitter({ q: 'epic', include_entities: false }, function(data){
    $.each(data.results, function(i, post){
      $('.panel-container').append(ich.panel(post));
    });
  });

  // flip panels
  $('.panel .panel-inner').live('click', function(){
    $(this).toggleClass('flipped');
  });

});