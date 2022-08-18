/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game()
/** 
 * Listens for click on `btn__reset` and calls startGame() on game object
 */
 document.getElementById("btn__reset").addEventListener("click", function(e) {
    game.resetGame(e)
    game.startGame()
})

/** 
 * Listen for onscreen keyboard button clicks, then called handleInteraction
 */
document.querySelector("#qwerty").addEventListener('click', function(e) {
    if (e.target.tagName === "BUTTON") {
        game.handleInteraction(e.target);
    }
})

/** 
 * Listen for onscreen keyboard button clicks, then called handleInteraction
 */
