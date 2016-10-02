console.log("JS file is connected to HTML! Woo!")

//defining four card variables for the memory card game
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

/*
if (cardOne === cardTwo){
	alert("You found a match!");
}	else {
		alert("Sorry, try again!");
	}
	*/

//initial declaration of total card variable
var gameBoard = document.querySelector('#game-board');
var totalCards = 4;

//function to create cards with 'card' class
var createCards = function() {
	for (x=0; x < totalCards; x++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}	

}

//connect create card function to button

var cardButton = document.getElementById('cardButton');

cardButton.addEventListener('click', createCards);