var arr = [];
var squares = document.querySelectorAll(".square");
var score = 0;

arr = fill();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var scoreDisplay = document.querySelector("#score");
var head = document.querySelector("h1");

 var pickedColor = selectedColor();
  colorDisplay.textContent = pickedColor;
 console.log(pickedColor);

for(var i= 0;i<6;++i ){
  
   squares[i].style.background = arr[i];
   squares[i].addEventListener("click",function(){
    var clickedcolor = this.style.background;
    console.log(clickedcolor);
    console.log(pickedColor);
    if(clickedcolor === pickedColor){
      messageDisplay.textContent = "correct!";
      score  = score+1;
      changeColor();
    }
    else {
    	this.style.background = "#132838"
// this.style.opacity += 0.1;
    	messageDisplay.textContent = "try again!!";
scoreDisplay.textContent = "Your Score is : " + score; 
}
  
  });
}

function changeColor(){
	for(var i=0;i<6;i++){
		squares[i].style.background = pickedColor;
	}
  // colorDisplay.style.color  = pickedColor;
head.style.background = pickedColor;
}

function fill(){
  var arr = [];
  for(var i=0;i<6;i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}


function randomNumber(){
	var i = Math.floor(Math.random() * 6);

	return i;
}
function selectedColor(){

	var pickedcolor = arr[randomNumber()];
console.log(pickedcolor);
  return pickedcolor;
}



//var squares = document.querySelectorAll(".square");


// var correctAnswer = arr[randomNumber];
// color.textContent = correctAnswer;
// console.log(correctAnswer);



