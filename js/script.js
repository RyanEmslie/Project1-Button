var randNum;
var displayQuote;
var randRGB;
var storedNum = [];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);




//generates an array with random order of unique values 1 through 4
function randNumArray() {
	
	storedNum = [];
	do {
		randNum = Math.floor((Math.random() * 4)) + 1;
		if (storedNum.indexOf(randNum) == -1) {
			storedNum.push(randNum);
		}
	} while ( storedNum.length <= 3 );

	return storedNum;
	

}




/*Create a function named getRandomQuote which:
selects a random quote object from the quotes array
returns the randomly selected quote object*/
function getRandomQuote() {
	//variable generates a random number between 0 and 4 - 5 total quotes
	//randNum = Math.floor(Math.random() * quotes.length);
	
	randNumArray();

	//variable containing the randomly selected quote object
	displayQuote = quotes[storedNum];
}



/*Create a function named printQuote which follows these rules:
printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string containing the different properties of the quote object using the following HTML template:*/
function printQuote() {
	//calling the getRandomQuote function
	getRandomQuote();
	//calling the random color generator
	randColor();
	document.getElementById('quote-box').innerHTML = '<p class="quote">' + displayQuote.quote + '</p>' +
													'<p class="source">' + displayQuote.source + '<span class="citation">' + 
													displayQuote.citation + '</span>' + '<span class="year">' + displayQuote.year + '</span>' + 
													'<span class="tag">' + displayQuote.tag + '</span>' + '</p>';
	console.log(displayQuote);
}


//Function generates three random numbers between 0-50 (purposely keeping the colors dark) and sets the background and the button to the new rgb random number
function randColor() {

	randRed = Math.floor(Math.random() * 50);
	randBlue = Math.floor(Math.random() * 50);
	randGreen = Math.floor(Math.random() * 50);
	randAlpha = Math.random();
	randRGB = 'rgb(' + randRed + ', ' + randBlue + ', ' + randGreen + ')';
	document.body.style.backgroundColor = randRGB;
	document.getElementById('loadQuote').style.backgroundColor = randRGB;

}





//call the printQuote function
printQuote();

