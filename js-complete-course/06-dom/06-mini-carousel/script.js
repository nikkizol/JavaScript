/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
        let i = 1;
        let gallery = [
            "../../_shared/img/bell.svg",
            "../../_shared/img/clock.svg",
            "../../_shared/img/compass.svg",
            "../../_shared/img/lemon.svg",
            "../../_shared/img/map.svg",
        ];
        document.getElementById('next').addEventListener('click', function (e) {
            document.querySelectorAll("img")[0].src = gallery[i];
            i++;
            if (i >= gallery.length) {
                i = 0;

            }
        })
    }
)();


// let i=1
//         for (var j = gallery.length; j--;) {
//             var img = new Image();
//             img.src = gallery[j];
//         }
//
//         document.getElementById('next').addEventListener('click', function (e) {
//             this.src = gallery[i >= gallery.length - 1 ? i = 0 : ++i];
//         }, false);
//
//     }


//let target = document.querySelectorAll("img")
// let gallery = [
//     "../../_shared/img/bell.svg",
//     "../../_shared/img/clock.svg",
//     "../../_shared/img/compass.svg",
//     "../../_shared/img/lemon.svg",
//     "../../_shared/img/map.svg",
// ];
// for (let i = 0; i < gallery.length; i++)
// {
//     document.getElementById('next').addEventListener('click', function (e) {
//         target.src = gallery[i];