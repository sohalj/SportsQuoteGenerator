//var random =  Math.floor(Math.random() * 4);




$(document).ready(function(){
	$.getJSON("quotes.json", function(json){   /*Sets defaults for quote and picture associated with it*/
				html2="";
				html3="";
				
				html2 += "<div class='quote'>"
				html2 += "<p>" + '"' + json[0].quoteText + '"' + "</p>"
				html2 += "<p class='text-right'>" + "- " + json[0].quoteAuthor  + "</p>"
				html3 += "<img src=" + json[0].imageLink + "alt=" +  json[0].quoteAuthor  + "align=" + "middle" + ">";
				$(".default").html(html2);
				$(".defaultpic").html(html3);
	});





	$("#getQuote").on("click", function(){
		$(".default").remove();
		$(".defaultpic").remove();

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

				html += "<div class='quote'>"


				html += "<p>" + '"' + val.quoteText + '"' + "</p>"


				html += "<p class='text-right'>" + "- " + val.quoteAuthor  + "</p>"

				html += "<button type='button' class='btn btn-primary' id='getQuote'> 'newQuote' </button>"


				html +="</div>"

				html1 += "<img src=" + val.imageLink + "alt=" +  val.quoteAuthor  + "align=" + "middle" + ">";
		$(".message").html(html);
		$(".picture").html(html1);

		
			$(".quote").css({"background-color": "white", 
																"font-size": "2em",
																"color": "black",
																"font-style": "italic"});
			
			$("body").css({"background-color": "red"});
			//$('head').append('<link rel="stylesheet" href="mystyle.css" type="text/css" />');

		
		

		});
	});
});