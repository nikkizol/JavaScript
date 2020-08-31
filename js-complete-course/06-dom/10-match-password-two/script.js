/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function verif(e) {
        var x = document.getElementById('pass-one').value
        var y = document.getElementById('pass-two').value
        if (x.match(/[a-z]/g) && x.match(
            /[A-Z]/g) && x.match(
            /[0-9]/g) && x.match(
            /[^a-zA-Z\d]/g) && x.length >= 5 && x === y)
            // res = "TRUE";
        alert ('true');

        else {
            res = "error";
            document.getElementById('pass-one').value = res;
            document.getElementById('pass-two').value = res;
        }
    }

    document.getElementById('run').addEventListener('click', verif)

})();
