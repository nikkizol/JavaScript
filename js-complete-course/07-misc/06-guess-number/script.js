/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let x = Math.floor(Math.random() * 99) + 1;
    console.log(x)
    let guesses = 0;
    let y = prompt("Guess the numb between 1 and 100?")

    while (y !== x) {
        if (y == null) {
            break
        } else if (y < x) {
            y = prompt("Higher")
            guesses++;
        } else if (y > x) {
            y = prompt("Lower")
            guesses++;
        } else if (y === x) {
            alert("Good job, you did " + guesses + " tries")
            break
        }

    }

})();
