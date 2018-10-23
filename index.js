$(document).ready(function(){
	var dataQuote = '';
	var dataAuthor = '';
	loadQuote();
	changeColors();
	
	$('#btn1').click(function(){
		loadQuote();
		document.body.style.backgroundColor = changeColors();
	});
	
	$('#btn2').click(function(){
		var tweetThis = 'https://twitter.com/intent/tweet?text=' + dataQuote + ' -' + dataAuthor;
    window.open(tweetThis, 'twitter');
    return false;
	});
	
	function loadQuote() {
		$.getJSON("https://talaikis.com/api/quotes/random/", function(data){
			$('#quote-box').html(`
				<h2 id="quote">${data.quote}</h2>
				<p id="author">(${data.author})</p>
			`);
			dataQuote = data.quote;
      dataAuthor = data.author;
		});
	};
	
	function changeColors() {
		var colorArray = [];
		
		for(var i=0; i < 3; i++) {
			colorArray.push(Math.floor(Math.random() * (255-0) + 0));
		}
		// convert to hex
		var color = colorArray.map(x=>x.toString(16)).join('');
		return `#${color}`;
	}
});