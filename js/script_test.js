var randNum;
var displayQuote;
var randRGB;
var storedNum = [];
var quote1;
var arrayOfQuotes = [];
var counter = 0;
var myVar;


//Function called when the "Show Next Quote Button" is pressed
function printQuote() {
	//calls the randColor so that a new set up RGB colors is generated
	randColor();
	//writes each unique quote to HTML.
	document.getElementById('quote-box').innerHTML = arrayOfQuotes[counter];
	//Included so the instructor can see that four unique quotes are used in a row (viewd in the console.)
	console.log(storedNum);
	console.log(storedNum[counter]);
	//variable established so that each value in the array is called
	counter += 1;
	//loop used so that once the counter reaches the array.length a new set of unique quotes is established
	if (counter > 3) {
		quoteBuilder();
		counter = 0;
	}
}


//function uses the unique random number array to call each of the quote objects and constructs the HTML string.
function quoteBuilder(){
	randNumArray();
	
//start with an empty array so that a new array of unique numbers is used after the first array is cycled through 
	arrayOfQuotes = [];

	for (i = 0; i<=3; i+=1) {
		c = storedNum[i];
		quote1 = '<p class="quote">' + quotes[c].quote + '</p>' +
													'<p class="source">' + quotes[c].source + '<span class="citation">' + 
													quotes[c].citation + '</span>' + '<span class="year">' + quotes[c].year + '</span>' + 
													'<span class="tag">' + quotes[c].tag + '</span>' + '</p>';
		//populates an array with HTML strings
		arrayOfQuotes.push(quote1);		
	}
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


//generates an array with random order of unique values 1 through 4
function randNumArray() {
	
	storedNum = [];
	do {
		randNum = Math.floor((Math.random() * 4)) + 1;
		if (storedNum.indexOf(randNum) == -1) {
			storedNum.push(randNum);
		}
	} while ( storedNum.length <= 3 );
}

function timerFunc() {

	myVar = setInterval(printQuote, 5000);

}



//initializes the quoteBuilder function on page load.
quoteBuilder();
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


