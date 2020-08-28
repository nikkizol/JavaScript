/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let target = document.getElementById("target")
    let myTable = document.createElement('table');
    let numberOfRows = 10;
    let numberOfCellsInRow = 1;
    for (let i = 0; i < numberOfRows; i++) {
        let tempRow = document.createElement('tr');
        for (let j = 0; j < numberOfCellsInRow; j++) {
            let tempCell = document.createElement('td');
            tempCell.textContent = 'content';
            tempRow.appendChild(tempCell);
        }
        myTable.appendChild(tempRow);
    }
    target.appendChild(myTable);


})();
