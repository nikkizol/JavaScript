/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', func)

    async function func() {
        try {
            let resultPost = await window.lib.getPosts()
            resultPost.forEach(async function (post) {
                let resultComments = await window.lib.getComments(post.id)
                post.comments = resultComments
                console.log(post)
            })
        } catch (error) {
            console.log(error)
        }
    }

})();
// ***works***
// (() => {
//
//     document.getElementById('run').addEventListener('click', func)
//     async function func() {
//         try {
//             let resultPost = await window.lib.getPosts()
//             resultPost.forEach(post => {
//                 async function Comment() {
//                     let resultComments = await window.lib.getComments(post.id)
//                     post.comments = resultComments
//                     console.log(post)
//                 }
//                 Comment()
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     }
//
// })();
