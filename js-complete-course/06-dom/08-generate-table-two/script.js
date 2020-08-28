/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let target = document.getElementById("target")
    let myTable = document.createElement('table');
    let numberOfRows = 11;
    let numberOfCellsInRow = 11;
    for (let i = 1; i < numberOfRows; i++) {
        let tempRow = document.createElement('tr');
        for (let j = 1; j < numberOfCellsInRow; j++) {
            let tempCell = document.createElement('td');
            tempRow.appendChild(tempCell);
            tempCell.innerHTML = i * j
        }
        myTable.appendChild(tempRow);
    }
    target.appendChild(myTable);


})();
