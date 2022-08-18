/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = 
        [
        new Phrase("how you doin"), 
        new Phrase("you only live once"), 
        new Phrase("just do it"), 
        new Phrase("happy birthday"), 
        new Phrase("down for whatever"),
        new Phrase("jesus take the wheel"),
        new Phrase("play by ear"),
        new Phrase("only one way to find out")
        ]
        this.activePhrase = null; 

    }

     /* randomly retrieves one phrase from the phrases array */

     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)]
    }

    /*  hides the start screen overlay, sets the activePhrase property to a random phrase, 
    and calls the addPhraseToDisplay() method on the activePhrase property */
    startGame() {
        let overlay = document.getElementById("overlay")
        overlay.style.display = "none"

        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }

   

    /* 
    1. Disables the selected letter's onscreen keyboard button 
    2. If the phrase does not include the guessed letter, the wrong CSS class is
    added to the selected letter's keyboard button and the removeLife() method is called
    3. If the phrase includes the guessed letter, the chosen CSS class is added to the selected 
    letter's keyboard button, the showMatchedLetter() method is called on the phrase, and the 
    checkForWin() method is called. If the player has won the game, the gameOver() method is called
    */
    handleInteraction(e) {
        
        if (this.activePhrase.checkLetter(e.textContent) == false) {
            e.className = "wrong"
            this.removeLife()
        } else if (this.activePhrase.checkLetter(e.textContent)) {
            e.className = "chosen"
            this.activePhrase.showMatchedLetter(e.textContent)
            this.checkForWin()
            if (this.checkForWin()) {
                this.gameOver(true)
                
            }
            if (this.missed > 4) {
                this.gameOver(false)
                }
            }
            e.disabled = true;
            
        }


    /* checks if the player has revealed all of the letters in the active phrase */

    checkForWin() {
        const hiddenLetters = document.getElementsByClassName("hide");
        if (hiddenLetters.length == 0) {
            console.log("true")
            return true;
        } else {
            console.log("false")
            return false; 
        }

    }

    /* removes a life from the scoreboard (one of the liveHeart.png images is replaced with a
     lostHeart.png image), increments the missed property, and if the player has lost the 
     game calls the gameOver() method
     */

    removeLife() {
        const selectedPhrase = document.getElementById("scoreboard");
        const childOfPhrase = selectedPhrase.firstElementChild;
        const hearts = childOfPhrase.getElementsByTagName("img");
        hearts[this.missed].src = "/images/lostHeart.png"
        this.missed += 1
        if (this.missed >= 5) {
            this.gameOver(false)
        }

    }

    /* displays a final "win" or "loss" message by showing the original 
    start screen overlay styled with either the win or lose CSS class
    */

    gameOver(gameWon) {
        let overlay = document.getElementById("overlay")
        let title = document.getElementById("game-over-message")
        let phrase = document.getElementById("phraseTitle")
        let restartBtn = document.getElementById("btn__reset")
        overlay.style.display = ""
        restartBtn.textContent = "Try again??"
        restartBtn.addEventListener("click", this.resetGame())

        if (gameWon) {
            overlay.className = "win"
            title.textContent = "Congrats, you won 🤩"
            phrase.style.display = "none"
        } else {
            overlay.className = "lose"
            title.textContent = "Sorry, you lost 😔"
            phrase.style.display = "none"
        }
        
        

        }




    resetGame(e) {
        this.missed = 0;
        this.activePhrase = 0;

        let hearts = document.getElementsByClassName("tries")
        let button = document.getElementById("qwerty").getElementsByTagName("button")
        let letters = document.querySelectorAll("#phrase li");
        
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].firstElementChild.src = "../images/liveHeart.png"
        }
        
        for (let i = 0; i < button.length; i++) {
            button[i].className = "key"
            button[i].disabled = false;
        }

        

        
        for (let letter of letters) {
            letter.remove()
        }
        
    }

}