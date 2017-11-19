
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#playagain");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var scoreDisplay = document.querySelector("#score");
var head = document.querySelector("h1");
var score = 0;
var pickedColor;
var arr1;

reset();
setUpSquares();


resetButton.addEventListener("click",function(){ 
  
  score = 0;
  reset();
  setUpSquares();
  resetColors();
  messageDisplay.textContent = ""; 
  resetButton.value = "New Colors!"});


function resetColors(){
  head.style.background = "#4682B4";
}

function setUpSquares(){
 
for(var i= 0;i<6;++i ){
  
    squares[i].style.background = arr1[i];
    squares[i].addEventListener("click",function(){
    var clickedcolor = this.style.background;
    console.log(clickedcolor);
   

    if(clickedcolor === pickedColor){
      messageDisplay.textContent = "correct!";
      score  = score+1;
      resetButton.value = "Play Again?";

      changeColor(pickedColor);
    }
    else 
    {
      this.style.background = "#132838"
      messageDisplay.textContent = "try again!!";
      scoreDisplay.textContent = "Your Score is : " + score; 
}
  
  });
}
}

function reset(){

  arr1 =  fill();
   pickedColor = selectedColor(arr1);
   colorDisplay.textContent = pickedColor;
 //  console.log(pickedColor);
 
 
}



function changeColor(pickedColor){
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
function selectedColor(arr){

	var pickedcolor = arr[randomNumber()];
//console.log(pickedcolor);
  return pickedcolor;
}



//var squares = document.querySelectorAll(".square");


// var correctAnswer = arr[randomNumber];
// color.textContent = correctAnswer;
// console.log(correctAnswer);



