// alert("hello");

// var clickedColor = this.style.backgroundColor;
// alert(clickedColor);

//var doc = document.getElementById("msg");

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + "," + g + "," + b + ")";
}

var squares = document.querySelectorAll(".square");
for(var i= 0;i<6;++i ){
squares[i].style.background = randomColor(); 
}

document.getElementById("msg").textContent = "try again";


