var mode = 6;

var h1 = document.querySelector("h1");
var colourCode = document.querySelector("#colourCode");
var squares = document.querySelectorAll(".square");
var result = document.querySelector("#result");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var colours = genRandColours(mode);
// Pick the correct colour.
var pickedColour = pickColour();
colourCode.textContent = pickedColour;

// init
for(var i = 0; i < squares.length; i++){
	// Set Colours.
	squares[i].style.backgroundColor = colours[i];

	// Listen for clicks on colours.
	squares[i].addEventListener("click", function(){
		// Find colour of the clicked square, and compare it to the pickedColour.
		var clickedColour = this.style.backgroundColor;
		if(clickedColour === pickedColour){
			result.textContent = "Correct!";
			displayWinningColour(clickedColour);
			resetButton.textContent = "Play again?";
		}
		else{
			this.style.backgroundColor = '#232323';
			result.textContent = "Try Again!";
		}
	});
}

// Hard and Easy buttons.
for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		// Set selected class
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		// Set mode
		this.textContent === "Easy" ? mode = 3: mode = 6;

		// Reset page.
		reset();
	});
}

// Reset button
resetButton.addEventListener("click", function(){
	reset();
});

function displayWinningColour(colour){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colour;
	}
	h1.style.backgroundColor = colour;
}

function pickColour(){
	// Math.random() generates a real number between 0 and 1.
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function genRandColours(num){
	// While our array has length < num, generate 3 random numbers between 0 and 255, then put them into rgb(x,y,z)
	var arr = [];
	while(arr.length < num){
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
		arr.push(rgb);
	}
	return arr;
}

function reset(){
	// Generate new colours and the display them, set a new picked colour.
	colours = genRandColours(mode);
	pickedColour = pickColour();
	colourCode.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

	// Reset the h1 background colour, reset the result and reset button text.
	h1.style.backgroundColor = "steelblue";
	result.textContent = "";
	resetButton.textContent = "New Colours";
}
