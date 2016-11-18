
$(document).ready(function() {
  $("#newQuote").on("click", function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en&callback=",
    function(json){
      var quote = json.quoteText;
      var author = json.quoteAuthor;
      $(".quote").html("<q>" + quote + "</q>");
      $(".author").html(" - " + author);
    });

  });
  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + $(".quote").text() + $(".author").text());
  });
});
