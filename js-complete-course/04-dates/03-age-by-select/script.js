/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {
    document.getElementById('run').addEventListener('click', function (e) {
        var today = new Date();
        var nowyear = today.getFullYear();
        var nowmonth = today.getMonth() + 1;
        var nowday = today.getDate();
        var day = parseInt(document.getElementById('dob-day').value);
        var month = parseInt(document.getElementById('dob-month').value);
        var year = parseInt(document.getElementById('dob-year').value);
        var age = nowyear - year;
        var age_month = nowmonth - month;
        var age_day = nowday - day;

        if (age_month < 0 || (age_month == 0 && age_day < 0)) {
            age = parseInt(age) - 1;
        }
        alert(age);


    });


})();
