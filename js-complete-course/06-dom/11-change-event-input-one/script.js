/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function changeEvent(e) {
        let input = document.getElementById("pass-one");
        input.maxLength = 10;
        let inp = document.getElementById('pass-one').value.length
        document.getElementById("counter").innerHTML = inp + '/10';

    }

    document.getElementById("pass-one").addEventListener("keyup", changeEvent);


})();


// function textLength(value){
//     let maxLength = 10;
//     if (value.length > maxLength)
//         value.value = value.value.substr(0, maxLength);
//
// }
//
// document.getElementById('pass-one').onkeyup = function(){
//     if(!textLength(this.value))  ;
//     let inp = document.getElementById('pass-one').value.length
//     document.getElementById("counter").innerHTML = inp + '/10';
//
// }