var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
var author="";
var quote="";
$(document).ready(function() {

    $("#getMessage").on("click", function(){
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
   author=json.quoteAuthor;
   quote=json.quoteText;
  $("#msgId").html(JSON.stringify(json.quoteText));
  $("#msgId2").html(JSON.stringify(json.quoteAuthor));
    
}); 
      // Only change code above this line.
  
    });
 
  $("#getMessage1").on("click",function(){

   $("#getMessage1").attr("href", tweetQuote()); 
   
  });
  
  
  
  function tweetQuote() {
       var twitterURL = 'https://twitter.com/intent/tweet?hashtags=quotes,freeCodeCamp&related=freecodecamp&text="';
       twitterURL +=quote +'" - '+ author;
    window.open(twitterURL,"mywindow"); 
       return twitterURL;
   }
  });