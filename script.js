//display 1 card (back)
//display 1 card front
// flip that card back and forth
//make a deck of cards (can be numbered 1-n for now)
// display all cards
//

var game = {
  board: document.querySelector('.board'),
  deck: [],


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
    this.buildDeck();
      for(var i = 0; i < this.deck.length; i++) {
        this.createCard(this.deck[i]);
      }

  },

  buildDeck: function() {
    for(var i = 0; i < 10; i++) {
      this.deck.push(i);
      this.deck.push(i);
    }
    this.shuffleDeck();
  },

  shuffleDeck: function() {
    // Using the Fisher-Yates (Knuth) shuffle
    var currentIndex = this.deck.length;
    var temporaryValue;
    var randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randomIndex];
      this.deck[randomIndex] = temporaryValue;
    }
  },

  playRound: function() {
    
  }
};

game.createCards();
