//display 1 card (back)
//display 1 card front
// flip that card back and forth
//make a deck of cards (can be numbered 1-n for now)
// display all cards

var card = document.createElement('div');
var face = document.createElement('p');
var value = document.createTextNode('1');

face.appendChild(value); // assigns a value to the face
face.classList.add('face'); // provides style to the face of the card

card.classList.add('card'); // creates card

card.appendChild(face);

card.classList.add('back'); // hides face value of card

var board = document.querySelector('.board');

board.appendChild(card);

card.addEventListener('click', flipCard);

function flipCard() {
  card.classList.toggle('back');
}
