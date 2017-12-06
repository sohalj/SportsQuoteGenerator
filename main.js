
$(document).ready(function(){
	$("#getQuote").on("click", function(){
		$.getJSON("quotes.json", function(json){
			var html = "";
			var html1 = "";

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

				html += "<div class = 'quote'>";

				html += "<p>" + '"' + val.quoteText + '"' + "</p>"

				html +="</div>";

				html += "<div class = 'author'>";

				html += "<p>" + "- " + val.quoteAuthor  + "</p>"

				html +="</div>";

				html1 += "<img src=" + val.imageLink + "alt=" +  val.quoteAuthor  + ">";
		$(".message").html(html);
		$(".picture").html(html1);
		});
	});
});