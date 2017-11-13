// alert("hello");

// var clickedColor = this.style.backgroundColor;
// alert(clickedColor);

//var doc = document.getElementById("msg");

var arr = [];
var squares = document.querySelectorAll(".square");
var msg = document.querySelector("#msg");
var color = document.querySelector("#color");
var score = document.querySelector("#score");
// msg.textContent = "Wrong!";
// msg.textContent = "Right!";
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + "," + g + "," + b + ")";
}
// document.onclick= function(event) {
//     // Compensate for IE<9's non-standard event model
//     //
//     if (event===undefined) event= window.event;
//     var target= 'target' in event? event.target : event.srcElement;

//     alert('clicked on '+target.tagName);
// };

function randomNumber(){
	var i = Math.floor(Math.random() * 6);
	return i;
}



var squares = document.querySelectorAll(".square");
for(var i= 0;i<6;++i ){
 arr.push(randomColor());
 // console.log(squares[i] );
 squares[i].style.backgroundColor = arr[i];

// = arr[i];
}

// document.getElementById("msg").textContent = "try again";


