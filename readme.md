# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1

## Make a game!

### Overview

This is a game of Memory. It incorporates HTML, CSS, and JavaScript to create an interactive, web-hosted game.

To approach this challenge, I broke the game down into its most basic component: a card. The card had to have certain properties.
* It had to have a location on the board
* It had to have a face
* It had to have a back
* The user had to be able to flip the card over

Once I had a card, I could move on to the next component: a deck of cards. These again had their own properties.
* The face cards had to be created in sets of pairs
* The deck had to be shuffled
* etc...

Only after the entire deck was in place did I begin to add the game rules. There were some challenges in implementing these rules.
* Identifying which cards were clicked
* Remembering the values of the active clicked cards
* Preventing the user from clicking matched cards
---

### User Stories

* As a user, I should be able to flip a card
* As a user, I should be able to win/lose the game
* As a user, I should be able to start a new game
* As a user, I should be able to match sets of cards
* As a card, I should be able to flip over no matter which side I am on
* As a card, I should be unique aside from my matching card
---

### Unsolved Problems

* When user clicks on multiple cards really fast, they get false matches
* Website does not look very pretty or professional
* The matchNumbers method loses its proper context when passed through setTimeout
---

### Bronze, Silver, and Gold Plans

**Bronze**
* Display back of cards
* Display front of cards
* Flip cards

**Silver**
* Track pairs of cards when they are flipped
* Freeze matching pairs
* Flip non-matches back over
* You win message
* Fix bug where you can see value of card by highlighting it

**Gold**
* Add images to cards
* Have different decks
* Add scoring
* Add a nice background to cards
* Add a reset button
---

### Psuedocode

display 1 card (back)
display 1 card front
flip that card back and forth
make a deck of cards (can be numbered 1-n for now)
display all cards
check if number is visible
  if not ?
  if yes, is this the first number?
    if yes, get a second number
    if no, compare numbers

    do numbers match?
      if yes, disable clicking on them
      if no, flip back over
