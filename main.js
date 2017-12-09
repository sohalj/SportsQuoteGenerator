//var random =  Math.floor(Math.random() * 4);

function setDefault(){
	$.getJSON("quotes.json", function(json){   /*Sets defaults for quote and picture associated with it*/
				html2="";
				html3="";
				defaultTweet="";


				html2 += "<div class='quote'>"
				html2 += "<p>" + '"' + json[0].quoteText + '"' + "</p>"
				html2 += "<p class='text-right'>" + "- " + json[0].quoteAuthor  + "</p>"
				html3 += "<img src=" + json[0].imageLink + "alt=" +  json[0].quoteAuthor  + "align=" + "middle" + ">";
				defaultTweet += "<a class='fa fa-twitter'" + "href=" + "'https://twitter.com/intent/tweet?" + "text=" + '"' + json[0].quoteText + '"' + " - " + json[0].quoteAuthor  + "'" +  "data-size='large'" +  "target='_blank'>" + "</a>"
				//defaultTweet += "<a class='fa fa-twitter'" + "href=" + "'https://twitter.com/intent/tweet?text=H'" + '"' +  json[0].quoteText + '"' +  "data-size='large'" +  "target='_blank'>" + "</a>"
		

				$(".default").html(html2);
				$(".defaultpic").html(html3);
				$(".defaultTweet").html(defaultTweet);
	});

}



function getQuote (){
	$("#getQuote1").on("click", function(){
		$(".default").remove();
		$(".defaultpic").remove();
		$(".defaultTweet").remove();

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

				html += "<button type='button' class='btn btn-primary' id='getQuote1'> 'newQuote' </button>"


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
	});
}



$(document).ready(function(){
	
	setDefault();
	getQuote();
	//newQuote();
			
});