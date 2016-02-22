//display 1 card (back)
//display 1 card front
// flip that card back and forth
//make a deck of cards (can be numbered 1-n for now)
// display all cards

var game = {
  board: document.querySelector('.board'),
  deck: [],
  card1: null,
  card2: null,


  createCard: function(faceValue, index) {
    var value = document.createTextNode(faceValue);
    card = document.createElement('div');
    card.setAttribute('data-deckPosition', index);
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
    game.playGame(this.getAttribute('data-deckPosition'));
  },

  createCards: function() {
    this.buildDeck();
      for(var i = 0; i < this.deck.length; i++) {
        this.createCard(this.deck[i], i);
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

  playGame: function(position) {
    var currentCard = document.getElementsByClassName('card');
    var value = currentCard[position].textContent;
    console.log(value);


    // if(!isBack && this.card1 === null) {
    //   this.card1 = number;
    // }
    // else if(!isBack && this.card2 === null) {
    //   this.card2 = number;
    //   this.matchNumbers();
    // }
    // else {
    //   console.log('play game else path');
    // }

    // check if number is visible
      // if not ?
      // if yes, is this the first number?
        // if yes, get a second number
        // if no, compare numbers

        // do numbers match?
          // if yes, disable clicking on them
          // if no, flip back over
  },

  matchNumbers: function() {
    if(this.card1 == this.card2){
      console.log('hooray');

    }
    else {
      console.log("booo!");
    }
    this.card1 = null;
    this.card2 = null;
  }
};

game.createCards();
