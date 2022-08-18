/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
   constructor(phrase) {
        this.phrase = phrase
   }

   /** 
     * method which adds the phrase to the gameboard
     */

   addPhraseToDisplay() {
        const phDiv = document.querySelector("#phrase ul");
        const phArr = this.phrase.split("")
        phArr.forEach((letter) => {
            const list = document.createElement('li')
            list.textContent = letter
            if (letter == " ") {
                list.className = "space"
            } else if (letter != " ") {
                list.className = `hide letter ${letter}`
            }

            phDiv.appendChild(list)
        })

        }

    /* which checks if a letter is in the phrase */

    checkLetter(letter) {
        if (this.phrase.split("").includes(letter)) {
            return true;
        } else {
            return false;
        }

    }

    /* which reveals the letter(s) on the board that matches the player's selection */

    showMatchedLetter(ltr) {
        const selectedPhrase = document.getElementById("phrase");
        const childOfPhrase = selectedPhrase.firstElementChild;
        const liLetters = childOfPhrase.getElementsByTagName("li");
        for (let i = 0; i < liLetters.length; i++) {
            if (liLetters[i].textContent == ltr) {
                liLetters[i].classList.replace("hide", "show");
            }
        }
    }

    



}