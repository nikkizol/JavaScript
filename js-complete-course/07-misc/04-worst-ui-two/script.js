/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let i = 460;
    let y = "00";
    let x = "00";
    let z = "00";
    let target = document.getElementById("target")
    let but = document.querySelectorAll("button")
    but[0].onclick = function () {
        if (i < 499)
            i++
        target.innerHTML = "0" + [i] + [y] + [z] + [x]
    }
    but[1].onclick = function () {
        if (y < 99)
            y++
        if (y < 10) {
            y = "0" + y
        } else
            y
        target.innerHTML = "0" + [i] + [y] + [z] + [x]
    }

    but[2].onclick = function () {
        if (z < 99)
            z++
        if (z < 10) {
            z = "0" + z
        } else
            z
        target.innerHTML = "0" + [i] + [y] + [z] + [x]
    }
    but[3].onclick = function () {
        if (x < 99)
            x++
        if (x < 10) {
            x = "0" + x
        } else
            x
        target.innerHTML = "0" + [i] + [y] + [z] + [x]
    }

})();

