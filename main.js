//var random =  Math.floor(Math.random() * 4);



function getQuote (){

		$.getJSON("quotes.json", function(json){
			var html = "";
			var html1 = "";
			var htmlTweet = "";

			/*json = json.filter(function(val){
				
				var value =  Math.floor(Math.random() * 4)
				console.log("value  "  +  value);
				return (val.id == value);
					//console.log("val.id  "  +  val.id);
			});*/

			//json.forEach(function(val){
			

			console.log("random number  "  + random);
			var random =  Math.floor(Math.random() * 4)
			console.log("random number asdfasdf "  + random);
			var val = json[random];

				html += "<div class='quote'>"


				html += "<p>" + '"' + val.quoteText + '"' + "</p>"


				html += "<p class='text-right'>" + "- " + val.quoteAuthor  + "</p>"

				html += "<button type='button' class='btn btn-primary' onclick='button()'> 'newQuote' </button>"


				html +="</div>"

								//html += "<button type='button' class='btn btn-primary' id='getQuote1'> 'newQuote' </button>"

				html1 += "<img src=" + val.imageLink + "alt=" +  val.quoteAuthor  + "align=" + "middle" + ">";


				htmlTweet += "<a class='fa fa-twitter'" + "href=" + "'https://twitter.com/intent/tweet?" + "text=" + '"' + val.quoteText + '"' + " - " + val.quoteAuthor  + "'" +  "data-size='large'" +  "target='_blank'>" + "</a>"
		

		$(".message").html(html);
		$(".picture").html(html1);
		$(".tweet").html(htmlTweet);
		$(".quote").css({"background-color": "white", 
																"font-size": "2em",
																"color": "black",
																"font-style": "italic"});
			
		$("body").css({"background-color": "red"});


		
		

		});
}

function button(){
	getQuote();
}


$(document).ready(function(){
	getQuote();
	$("#getQuote1").on("click", function(){
		getQuote();
	});			
});