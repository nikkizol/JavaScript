/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let target = document.getElementById("target")
    let targetArray = target.innerHTML.split(" ")
    for (let i = 0; i < targetArray.length; i++) {
        let span = document.createElement('span');
        span.textContent = targetArray[i];
        target.appendChild(span)
        span.style.fontSize = "40px";
        console.log(span)


        // let sp = document.querySelectorAll("span");
        // sp[1].style.fontSize = "10px";


    }


})();

// let target = document.getElementById("target").innerHTML
// targetArray = target.split(" ")
// // let span = target = "<span>"+targetArray[0]+"</span>"+ "<span>"+targetArray[1]+"</span>"+"<span>"+targetArray[2]+"</span>"+"<span>"+targetArray[3]+"</span>"+"<span>"+targetArray[4]+"</span>"+"<span>"+targetArray[5]+"</span>"+"<span>"+targetArray[6]+"</span>"+"<span>"+targetArray[7]+"</span>"+"<span>"+targetArray[8]+"</span>"+"<span>"+targetArray[9]+"</span>"+"<span>"+targetArray[10]+"</span>"+"<span>"+targetArray[11]+"</span>"+"<span>"+targetArray[12]+"</span>";
// result = [];
// for( let i = 0; i < targetArray.length; i++ ) {
//     let span = '<span>' + targetArray[i] + '</span>';
//     result.push(span);
// }
// let str = result.join(" ");
// console.log(str)
// let sp = document.querySelectorAll("span");
// sp[0].style.fontSize = "4px";
// document.getElementById("target").innerHTML = str;
//
//


