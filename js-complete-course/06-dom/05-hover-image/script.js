/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let img = document.querySelectorAll("img")[0]
    let newImg = document.querySelectorAll("img")[0].getAttribute("data-hover")
    img.addEventListener('mouseover', function () {
        this.src = newImg

    })
    let oldImg = document.querySelectorAll("img")[0].getAttribute("src")
    img.addEventListener('mouseout', function () {
        this.src = oldImg
    })

})();

