# GameShowApp - A Fun, Fortune-Like Phrase Guessing App!

## Description

Phrase Hunter was built by Shaun Smerling to mimic the phrase guessing gameshow "Fortune". The game involves a user who tries to simply guess the phrase by selecting letters from a keyboard displayed onscreen. The user has 5 guesses, indicated by the blue hearts at the bottom of the game. If they guess a wrong letter, a blue heart will turn grey and that letter will be disabled. If the user guesses the wrong letter 5 times, the user loses. Vice versa, if they guess the phrase correctly without using up all 5 guesses, the user wins! To reset the game after playing, simply click "Play Again"

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [Style Updates](#style-updates)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

This project was aimed at building a Browser Based Word Guessing Game called "Guess The Phrase". Utilizing OOP and Javascript, a user will be prompted to start the game whereby they'll be displayed a random phrase with hidden letters.

As the user chooses a letter through the onscreen keyboard, the program will continuously compare each letter clicked to the letters included in the phrase. If the letter clicked is included in the phrase, it will be revealed. This will help the user continuously see more of the phrase.

However, if the letter clicked is not included in the phrase, the user will lose a heart.

A player can continue to select letters until they either guess the phrase correctly or make five false guesses (and lose)

If the player wins, they'll be displayed a winning screen. Opposingly, if the player loses, they'll be displayed a losing screen. In both cases, they'll be prompted with a button to play again.

After a letter is clicked, whether it is correct or not, it will not longer be able to be used & for the games duration it will be disabled.

### Links

- Live Site URL: [Phrase Hunter hosted by Netlify](## add heroku link when live)

### Built with

- Javascript ES6
- HTML
- CSS

### Style Updates

- I added some simple hover effects to the onscreen keyboard
- I changed the color of the game title header
- I changed the color of the revealed letters in the phrase
- I changed the background color + header text of the winning & losing screen

### What I learned

Object-Oriented Programming was the name of the game here. I learned a lot about how to use OOP to create this game. Using just two classes (Game & Phrase), I was able to construct this game with all its simple intricacies reusing multiple instances of objects that are repeate throughout the game. Lastly, I used the DOM manipulation to make changes to the HTML & CSS. This taught me a lot about built in functions that you can use with DOM manipulation and better equiped me to know more in future projects.

## Author

- Medium - [@Smerling](https://www.medium.com/@smerling)
- Twitter - [@Smerlinger](https://www.twitter.com/Smerlinger)
