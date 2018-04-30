//tweeting scripts
/*window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

*/

//create an array of custom colors    
var colour = ["#257482", "#253782", "#552982", "#8c2b6b", "#2c6582", "#8fad7e", "#2c8251", "#7f822c", "#8e1a13"];
var quoteContent = '';
var quoteSource = '';
var tweet = document.getElementById("twitterButton");
var i = 0;
var quoteLeft = '<i class="fa fa-quote-left" aria-hidden="true" style="display: inline-block"></i>'



 


function colour_change() {
        
        i++;
        i = i<colour.length ? i :  0;
        
        var changeClass1 =  document.getElementsByClassName("changer1");
        var changeClass2 =  document.getElementsByClassName("changer2");
        
        //loop through and change background colors
        for (var k =0; k<changeClass1.length; k++) {
         
          changeClass1[k].style.background = colour[i];
          console.log(colour[i]);
        }
        
        //loop through and change text colors of quotes text
        for (var k =0; k<changeClass2.length; k++) {
         
          changeClass2[k].style.color = colour[i];
        }
      
    }

function getNewQuote() {
  //animate out old content
  $('#quote-content').animate({opacity: 0}, 500);
  $('#quote-source').animate({opacity: 0}, 500);
  //get the quote from api
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a){
  $('#quote-content').empty();  
  quoteContent = a[0].content.slice(3, -6);
  quoteSource = a[0].title;
  //fill in the quote box
  $('#quote-content').append(quoteLeft + ' ' + quoteContent);
  $('#quote-source').empty();
  $("#quote-source").append("-" + quoteSource);
  $('#quote-content').animate({opacity: 1}, 700);
  $('#quote-source').animate({opacity: 1}, 700);
  tweet.href = 'https://twitter.com/intent/tweet?text="' + quoteContent + '" -' + quoteSource;
                            
  });
 
}

function loadQuote() {
  getNewQuote(); 
}

$('#getQuote').click(function(){
  loadQuote();
  
});

$(document).ready(function() {
  $.ajaxSetup({
    cache: false
  });
  loadQuote();


})