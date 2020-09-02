/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let speed = 200
    let n = 460
    let x = "00"
    let z = "00"
    let y = "00"
    let but = document.querySelectorAll("button")
    let target = document.getElementById("target")
    let partOne = document.getElementById('part-one')
    let parttwo = document.getElementById('part-two');
    let partThree = document.getElementById('part-three');
    let partFour = document.getElementById('part-four');
    function run() {
        n = Math.floor(Math.random()*39) + 1;
        n += 460;
        partOne.value = n;
        x = Math.floor(Math.random()*99) + 1;
        parttwo.value = x;
        z = Math.floor(Math.random()*99) + 1;
        partThree.value = z;
        y = Math.floor(Math.random()*99) + 1;
        partFour.value = y;
        setTimeout(run, speed);
    }
    run();

    but[0].onclick = function() {
        partOne.value = n;
        target.innerHTML = "0" + n
    }

    but[1].onclick = function() {
        partOne.value = x;
        target.innerHTML += x
    }
    but[2].onclick = function() {
        partOne.value = z;
        target.innerHTML += z
    }
    but[3].onclick=  function() {
        partOne.value = y;
        target.innerHTML += y
    }
})();
