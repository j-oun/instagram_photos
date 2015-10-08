$(function(){
  $("#show").on("click", function() {
    $("#container").empty();
    $.ajax({
      url: 'https://api.instagram.com/v1/tags/lighthouse/media/recent?access_token=1962151498.ab103e5.a6c55841e42a4ad081ee3f0d5ebe692e',
      dataType: 'jsonp',
      success: function(data){
       for(var i=0; i < 5; i++)
       showImage(data.data[i].images.thumbnail.url);

      } 

      });
  });
});

function showImage(url) {
  $('<img src="' + url + '"/>').appendTo("#container");
}

