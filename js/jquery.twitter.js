;(function($){

$.twitter = function(query, callback) {
  $.getJSON('http://search.twitter.com/search.json?callback=?', query, function(data){
    callback.call(this, data);
  });
};

})(jQuery);