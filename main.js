/*1. Gets one of the JSON objects
	2. Creates quote, author of quote, newquote button twitter button
		 and the image in html
	3. Uses Jquery for the html created
	4. Makes css updates to the page based off of JSON object 
	   selected. Done using Jquery */


var currentNumber = 0; //used to not cause repeats
function getQuote (){
		$.getJSON("quotes.json", function(json){
			var html = "";
			var html1 = "";
			
			do{
				var random =  Math.floor(Math.random() * 4);
			}while(random==currentNumber)  //loop for no repeats
			currentNumber = random;
			var val = json[currentNumber];

			html += "<div class='quote text-center'>"
			html += "<p id='quote1'>" + '"' + val.quoteText + '"' + "</p>"
			html += "<p class='text-right'>" + "- " + val.quoteAuthor  + "</p>"
			html += "<button type='button' class='btn quoteButton' onclick='buttonClick()' > NewQuote </button>"
			html += "<a class='fa fa-twitter' style='float:right;'" + "href=" + "'https://twitter.com/intent/tweet?" + "text=" + '"' + val.quoteText + '"' + " - " + val.quoteAuthor  + "'" +  "data-size='large'" +  "target='_blank'>" + "</a>"
			html +="</div>"
			html1 += "<img class='pic img-responsive' style='display:block; margin:auto; width:57%;' src=" + val.imageLink + "alt=" +  val.quoteAuthor  + ">";

			var color = val.colorVal;

			$(".message").html(html);
			$(".picture").html(html1);
			$(".quote").fadeIn().css({
				"color": color,
				"transition": "2s"
			});
			$(".quoteButton").fadeIn().css({
				"background-color": color,
				"transition": "2s"
			});
			$(".fa").fadeIn().css({
				"background-color": color,
				"transition": "2s"
			});
			$("body").css({"background-color": color,
				"transition": "2s"
			});
		});
}

function buttonClick(){  //used with button created in html above
	getQuote();
}


$(document).ready(function(){
	getQuote();
});