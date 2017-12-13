var currentNumber = 0;



function getQuote (){

		$.getJSON("quotes.json", function(json){
			var html = "";
			var html1 = "";


			do{
				var random =  Math.floor(Math.random() * 4);
			}while(random==currentNumber)

			currentNumber = random;


			var val = json[currentNumber];

				html += "<div class='quote text-center'>"


				html += "<p id='quote1'>" + '"' + val.quoteText + '"' + "</p>"


				html += "<p class='text-right'>" + "- " + val.quoteAuthor  + "</p>"

				html += "<button type='button' class='btn quoteButton' onclick='buttonClick()' > newQuote </button>"

			  html += "<a class='fa fa-twitter' style='float:right;'" + "href=" + "'https://twitter.com/intent/tweet?" + "text=" + '"' + val.quoteText + '"' + " - " + val.quoteAuthor  + "'" +  "data-size='large'" +  "target='_blank'>" + "</a>"
		

				html +="</div>"

				html1 += "<img class='pic img-responsive' style='display:block; margin:auto; width:57%;' src=" + val.imageLink + "alt=" +  val.quoteAuthor  + ">";
		


			var color = val.colorVal;

		

		$(".message").html(html);
		$(".picture").html(html1);
		
		$(".quote").css({
			"color": color,
		});
		
		$(".quoteButton").fadeIn().css({
			//"color":  "white",
			"background-color": color,
			"transition": "2s"
});
	
$(".fa").fadeIn().css({
			"transition": "2s",
			"background-color": color
});









$("body").css({"background-color": color,
			"transition": "2s"
			});


		
		

		});
}




function buttonClick(){
	getQuote();
}





$(document).ready(function(){

	getQuote();
});