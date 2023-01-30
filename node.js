// JS File

// button function 
function buttonClicked() {
	console.log("button was clicked!");

	let buttonDiv = document.getElementById("button was clicked");

	buttonDiv.innerHTML = newText;

}

count = 0;

function countClick() {
	count++;
	document.getElementById("count").innerHTML = count;

}