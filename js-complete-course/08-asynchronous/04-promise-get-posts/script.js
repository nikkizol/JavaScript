/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', function  () {
        new Promise((resolve, reject) => {
            resolve(window.lib.getPosts())
        }).then(result => {
            console.log(result);
        })
            .catch(function (error) {
                console.log(error)
            })

    });

})();

// ****Works***
/*
        let promise = Promise.resolve(window.lib.getPosts());
        promise.then(function(val) {
            console.log(val);
        });
         */