request = new XMLHttpRequest();
request.open("GET", "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20", false);
request.send();
request = [].slice.call(JSON.parse(request.response));

getQuote();

document.getElementById("new-quote").addEventListener("click", getQuote);

$("#tweet").click(function(){
	
	window.open("http://twitter.com/intent/tweet?text=" + $("#quote-content").text() + " -" + $("#quote-source").text());
	
});



//Convert hex to rgb()
function convertHex(hex){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    var result = 'rgb('+r+', '+g+', '+b+')';
    return result;
}


function getQuote() {
	var backgroundColor = ["#142B76","#095C6C","#321378","#3C980A","#077453","#AF420B","#AF1E0B","#8C0953"];
  var randQuote = [Math.floor(Math.random() * request.length)];
	var randColor = backgroundColor[Math.floor(Math.random()*backgroundColor.length)];
	var currQuote = document.getElementById("quote-content").innerHTML;
	var currColor = $("body").css("background-color");
	var randColorRGB = convertHex(randColor);
	
	
	console.log(randColorRGB);
	console.log(currColor);
	
	if(currQuote.length > 2){
		currQuote = currQuote.replace("<p>","");
		currQuote = currQuote.replace("</p>","");
		currQuote = currQuote.replace("<em>","");
		currQuote = currQuote.replace("</em>","");
	}
	
	if(randQuote === currQuote){
		randQuote = [Math.floor(Math.random() * request.length)];
	}
	
	if(randColorRGB === currColor){
		randColor = backgroundColor[Math.floor(Math.random()*backgroundColor.length)];
	}
	
	if(randQuote == 4){
		randQuote = [Math.floor(Math.random() * request.length)];
		if(randQuote === currQuote){
		randQuote = [Math.floor(Math.random() * request.length)];
		}
	}
	
  document.getElementById("quote-content").innerHTML = request[randQuote].content;
  document.getElementById("quote-source").innerHTML = request[randQuote].title;
	

	$("body").css("background-color", randColor);
	$("#quote-content").css("color", randColor);
	
}



