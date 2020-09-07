/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {

    document.getElementById('run').addEventListener('click', function () {
        window.lib.getPosts(getPostsCallback);

    });

    function getPostsCallback(error, arr) {
        if (error) {
            console.error(error)
        } else {
            const arrayId = arr.map(function (post) {
                return post.id
            })
            arrayId.forEach(function (id) {
                window.lib.getComments(id, function (error, arr) {
                    if (error) {
                        console.error(error)
                    } else {
                        console.table(arr)
                    }

                })
            })


        }


    }


})();

//****Works****
// (() => {
//
//     document.getElementById('run').addEventListener('click', function () {
//         window.lib.getPosts(getPostsCallback);
//
//     });
//
//     function getPostsCallback(error, arr) {
//         if (error) {
//             console.error(error)
//         } else {
//             arr.forEach(function (post) {
//                 window.lib.getComments(post.id, function (error, arr) {
//                     if (error) {
//                         console.error(error)
//                     } else {
//                         console.table(arr)
//                     }
//
//                 })
//             })
//
//
//         }
//
//
//     }
//
//
// })();




