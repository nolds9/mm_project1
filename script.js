var game = {
  board: document.querySelector('.board'),
  deck: [],
  card1: null,
  card2: null,


  createCard: function(faceValue, index) {
    var value = document.createTextNode(faceValue);
    var card = document.createElement('div');
    card.setAttribute('data-deckPosition', index);
    var face = document.createElement('p');
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

    var restart = document.querySelector('.restart');
    restart.addEventListener('click', this.startNewGame);
  },

  buildDeck: function() {
    for(var i = 0; i < 8; i++) {
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
    var allCards = document.getElementsByClassName('card');
    var currentCard = allCards[position];
    var isBack = currentCard.classList.contains('back');

    if(!isBack && this.card1 === null) {
      this.card1 = currentCard;
    }
    else if(!isBack && this.card2 === null) {
      this.card2 = currentCard;
      var self = this;
      setTimeout(self.matchNumbers, 500);
    }
    else {
      console.log('Something weird happened');
    }
  },

  matchNumbers: function() {
    var value1 = game.card1.textContent;
    var value2 = game.card2.textContent;
    if(value1 == value2){
      game.card1.removeEventListener('click', game.flipCard);
      game.card2.removeEventListener('click', game.flipCard);
      game.checkForWin();
    }
    else {
      game.card1.classList.toggle('back');
      game.card2.classList.toggle('back');
    }
    game.card1 = null;
    game.card2 = null;
  },

  checkForWin: function() {
    var flippedCards = document.getElementsByClassName('back');

    if(flippedCards.length <= 0) {
      var header = document.querySelector('header');
      var winText = document.createTextNode("You win! YAY!");
      var winP = document.createElement('p');
      var winDiv = document.createElement('div');
      winP.classList.add('winner');
      winP.appendChild(winText);
      winDiv.appendChild(winP);
      header.appendChild(winDiv);
    }
  },

  startNewGame: function() {
    location.reload();
  }
};

game.createCards();
