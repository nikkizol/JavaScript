/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var today = new Date();
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    var monthIndex = today.getMonth();
    var currentmonth = months[monthIndex]
    var currentyear = today.getFullYear();
    var currentdate = today.getDate();
    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    var dayIndex = today.getDay()
    var currentday = days[dayIndex]
    var currenthour = today.getHours();
    var currentmin = today.getMinutes()

    // var monthIndex = d.getMonth()
    // var monthName = months[monthIndex]

    var formatted = `${currentday} ${currentdate} ${currentmonth} ${currentyear}, ${currenthour}h${currentmin}`
    document.getElementById("target").innerHTML = formatted
    // your code here

})();
