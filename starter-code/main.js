console.log("JS file is connected to HTML! Woo!")


/* old code 


//defining four card variables for the memory card game
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";


if (cardOne === cardTwo){
	alert("You found a match!");
}	else {
		alert("Sorry, try again!");
	}
	*/

//initial declaration of total card variable

var gameBoard = document.querySelector('#game-board');
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//function to create cards with 'card' class
var createCards = function() {
	for (x=0; x < cards.length; x++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);

		newCard.setAttribute('data-card', cards[x]);
		newCard.addEventListener('click', isTwoCards);
	}	

}

createCards();

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));


	if (this.getAttribute('data-card') === "king") {
			this.innerHTML = "<img src='king.png' alt='King of Spades'>";
		} else {
			this.innerHTML = "<img src='queen.png' alt='Queen of Spades'>";
		}

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];



  }

}

var isMatch = function (cards) {
	if (cards[0] === cards[1]) {
		alert("you matched two cards!");
	} else {
		alert("sorry.. try again!");
	}

	//code to clear cards...
	for (i = 0; i < 2; i++){
		cardsInPlay[i].innerHTML ='';
	}
}









