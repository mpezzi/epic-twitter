$(function(){

  // @see: https://dev.twitter.com/docs/api/1/get/search
  $.twitter({ q: 'epic', include_entities: false }, function(data){
    $.each(data.results, function(i, post){
      console.log(post);
      $('#main').append(ich.post(post));
    });
  });

});