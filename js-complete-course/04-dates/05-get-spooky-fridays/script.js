/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById('run').addEventListener('click', function (e) {
        var year = parseInt(document.getElementById('year').value);

        function arrayOfFridaythe13thsIn() {
            var array = [];
            for (var month = 0; month < 12; month++) {
                var d = new Date(year, month, 13);
                if (d.getDay() == 5) {
                    array.push(d);
                }
            }
            return array;
        }

        alert(arrayOfFridaythe13thsIn().toLocaleString(undefined, {day: "numeric", month: "long"}));
    });
})();

