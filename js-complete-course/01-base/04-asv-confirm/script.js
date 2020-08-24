/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var age = prompt("How old are you?");
    var gender = prompt("What is you gender?");
    var city = prompt("Where are you from (city)?");
    result = confirm("Please, confirm your answers:\n" + "Age: " + age + ";\n" + "Gender: " + gender + ";\n" + "City: " + city);
    if (result === true) {
        alert("Thank you for your answers!");
    }
    while (!result === false) {
        var age = prompt("How old are you?");
        var gender = prompt("What is you gender?");
        var city = prompt("Where are you from (city)?");
        result = confirm("Please, confirm your answers:\n" + "Age: " + age + ";\n" + "Gender: " + gender + ";\n" + "City: " + city);
        if (result === true) {
            alert("Thank you for your answers!");
        }
    }

})
();
