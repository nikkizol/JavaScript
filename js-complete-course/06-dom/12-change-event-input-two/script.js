/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function changeEvent (e) {
        let x = document.getElementById('pass-one').value
        if (x.match(/[0-9]{2}/) && x.length >= 8)
            document.getElementById("validity").innerHTML = "Ok"

        else {
            document.getElementById("validity").innerHTML = "Not ok"
        }
    }

    document.getElementById("pass-one").addEventListener("keyup", changeEvent);


})();
