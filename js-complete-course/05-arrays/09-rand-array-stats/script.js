/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById('run').addEventListener('click', function (e) {
        let td = document.getElementsByTagName('td')

        let randomNumbers = [];

        for (let i = 0; i < 10; i++) {

            let numb = Math.floor(Math.random() * 100) + 1

            randomNumbers.push(numb)

            td[i].innerText = numb
            let max = [...td].map(num => +num.innerText.replace());
            document.getElementById('max').innerText = (Math.max(...max));
            document.getElementById('min').innerText = (Math.min(...max));
            let sum = max.reduce(function (a, b) {return a + b;}, 0);
            document.getElementById('sum').innerText = sum;
            let avg = max.reduce(function (a, b) {return a + b;}, 0) / max.length;
            document.getElementById('average').innerText = avg;

        }
    })

})();


// td.max = function( array ){
//     return Math.max.apply( Math, number );
// };