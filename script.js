//display 1 card (back)
//display 1 card front
// flip that card back and forth
//make a deck of cards (can be numbered 1-n for now)
// display all cards

var game = {
  board: document.querySelector('.board'),
  card: document.createElement('div'),
  face: document.createElement('p'),
  value: document.createTextNode('1'),

  createCard: function() {
    this.face.appendChild(this.value); // assigns a value to the face
    this.face.classList.add('face'); // provides style to the face of the card

    this.card.classList.add('card'); // creates card

    this.card.appendChild(this.face);

    this.card.classList.add('back'); // hides face value of card

    this.board.appendChild(this.card);

    this.card.addEventListener('click', this.flipCard);
  },

  flipCard: function() {
    this.classList.toggle('back');
  }
};

game.createCard();
