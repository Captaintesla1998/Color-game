var NumOfSquares=9
var colors=generateColors(NumOfSquares);

var pickedColor=pickcolor();
var displaycolor=document.querySelector("#headchanger");

displaycolor.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

var EasyBtn=document.querySelector("#easybtn");
var HardBtn=document.querySelector("#hardbtn");

EasyBtn.addEventListener("click",function(){
	EasyBtn.classList.add("selected")
	HardBtn.classList.remove("selected")
	var NumOfSquares=3
	colors=generateColors(NumOfSquares)
	//pick one to display in jumbotron
	pickedColor=pickcolor();
	displaycolor.textContent=pickedColor;
	//update the three squares
	for (var i=0;i<boxes.length;i++){
		if(colors[i]){
			boxes[i].style.backgroundColor=colors[i]
		}
		else
		{
			//hide the three other squares
			boxes[i].style.display="none";
		}
	}
	
})
HardBtn.addEventListener("click",function(){
	HardBtn.classList.add("selected")
	EasyBtn.classList.remove("selected")
	var NumOfSquares=9
	colors=generateColors(NumOfSquares)
	//pick one to display in jumbotron
	pickedColor=pickcolor();
	displaycolor.textContent=pickedColor;
	//update the three squares
	for (var i=0;i<boxes.length;i++){
		boxes[i].style.backgroundColor=colors[i]
		boxes[i].style.display="block";
	}
})

resetButton.addEventListener("click",function(){
	//generate a new set of colors
	colors=generateColors(NumOfSquares);
	//pick a random color
	pickedColor=pickcolor();
	//change colorDisplay at the top in H1
	displaycolor.textContent=pickedColor;
	//chaging square colors to arbitrary
	for (var i=0;i<boxes.length;i++){
	boxes[i].style.backgroundColor = colors[i];
	//changes the colors of boxes
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="   ";
	this.textContent="NEW COLORS"
})

var boxes=document.querySelectorAll(".square");
for (var i=0;i<boxes.length;i++){
	boxes[i].style.backgroundColor = colors[i];
	//Add event listeners
	boxes[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		//check if the color is matching
		console.log(pickedColor,clickedColor);
		if (clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?"
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again!"
		}
	});
}

function changeColor(color){
	//loop through all the squares
	for (var i=0;i<boxes.length;i++){
		//change the color to match the correct answer
		boxes[i].style.backgroundColor=color;
	}
	
}

//picks an arbitrary color
function pickcolor() {
	// body...
	var colorNum=Math.floor(Math.random()*colors.length);
	return colors[colorNum];
}

//Generate an array of colors
function generateColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for (var i=0;i<num;i++){
		//get random color
		arr.push(randomColor());
	}
	//return array
	return arr;
}


//generate a random RGB color 
function randomColor(){
	var red=Math.floor(Math.random()*255+1);
	var green=Math.floor(Math.random()*255+1);
	var blue=Math.floor(Math.random()*255+1);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}