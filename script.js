//display 1 card (back)
//display 1 card front
// flip that card back and forth
//make a deck of cards (can be numbered 1-n for now)
// display all cards

var game = {
  board: document.querySelector('.board'),
  deck1: [],

  createCard: function(faceValue) {
    var value = document.createTextNode(faceValue);
    card = document.createElement('div');
    face = document.createElement('p');
    face.appendChild(value); // assigns a value to the face
    face.classList.add('face'); // provides style to the face of the card
    card.classList.add('card'); // creates card
    card.appendChild(face);
    card.classList.add('back'); // hides face value of card
    this.board.appendChild(card);
    card.addEventListener('click', this.flipCard);
  },

  flipCard: function() {
    this.classList.toggle('back');
  },

  createCards: function() {
      for(var i = 0; i < 10; i++) {
        this.createCard(1);
      }

  }
};

game.createCards();
