/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', function  () {
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then( (data) => appendData(data));
        function appendData(data) {
            for (let i = 0; i < data.length; i++) {
                let temp = document.querySelector('#tpl-hero').content.cloneNode(true)
                temp.querySelector('.name').innerHTML = data[i].name
                temp.querySelector('.alter-ego').innerHTML = data[i].alterEgo
                temp.querySelector('.powers').innerHTML = data[i].abilities
                target.appendChild(temp)

            }
        }
    });

})();