(() => {
    let hitButton = document.getElementById('hit-button');
    let stayButton = document.getElementById('stay-button');
    let shuffleButton = document.getElementById('shuffle');
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
    shuffleButton.style.display = 'none';

    let newGameButton = document.getElementById('new-game-button');
    newGameButton.addEventListener('click', function () {
        newGameButton.style.display = 'none';
        hitButton.style.display = 'inline';
        stayButton.style.display = 'inline';
        shuffleButton.style.display = 'inline';
        document.getElementById('computer').innerHTML = "Computer score: " + 0
        document.getElementById('player').innerHTML = "Player score: " + 0
    })
    shuffleButton.addEventListener('click', function () {
        let computerNumb1 = Math.floor(Math.random() * 10) + 2;
        let computerNumb2 = Math.floor(Math.random() * 10) + 2;
        console.log(computerNumb1)
        console.log(computerNumb2)
        document.getElementById('computer').innerHTML = "Computer score: " + computerNumb1 + ", " + computerNumb2
        let yourSocre1 = Math.floor(Math.random() * 10) + 2;
        let yourSocre2 = Math.floor(Math.random() * 10) + 2;
        console.log(yourSocre1)
        console.log(yourSocre2)
        document.getElementById('totalcompscore').innerHTML = 'Total computer: ' + (computerNumb1+computerNumb2)
        document.getElementById('totalplayerscore').innerHTML = 'Total player: ' + (yourSocre1+yourSocre2)
        document.getElementById('player').innerHTML =  "Player score: " + yourSocre1 + ", " + yourSocre2

        hitButton.addEventListener('click', function () {
            let addNewNumber = Math.floor(Math.random() * 10) + 2;
            let totalpl =  document.getElementById('player').innerHTML +=", " + addNewNumber
            let totalSplit = totalpl.split(":");
            let numTotalSplit = totalSplit[1].split(', ')
            let TotalPeopleBe =  numTotalSplit.reduce(function(prev, num) {
                return prev + +num;
            }, 0);
            document.getElementById('totalplayerscore').innerHTML = 'Total player: '+ TotalPeopleBe




        })

    })
})();

// function totalPlayer(value1, value2, value3,) {
//     result = (value1+value2+value3);
//     return result;
// }
//
// console.log(totalPlayer(yourSocre1,yourSocre2, +addNewNumber))