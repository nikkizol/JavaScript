/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// ***works***
(() => {

    document.getElementById('run').addEventListener('click', func)

    function func() {
        return new Promise((resolve, reject) => {
            let result = window.lib.getPosts()
            resolve(result)
        }).then((result) => result.forEach(function (post) {
                new Promise((resolve, reject) => {
                    let result = window.lib.getComments(post.id)
                    resolve(result)
                }).then(result => console.log(result))

            }
        )).catch(function (error) {
            console.log(error)
        })
    }

})();

// *** async version works ***
// (() => {
//
//     document.getElementById('run').addEventListener('click', func)
//
//     async function func() {
//         try {
//             let resultPost = await window.lib.getPosts()
//             resultPost.forEach(async function (post) {
//                 let resultComments = await window.lib.getComments(post.id)
//                 console.log(resultComments)
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     }
//
// })();