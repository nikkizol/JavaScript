(() => {
    let hitButton = document.getElementById('hit-button');
    let stayButton = document.getElementById('stay-button');
    let shuffleButton = document.getElementById('shuffle');
    let result = document.getElementById('result')
    let resetButton = document.getElementById('reset-button');
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
    shuffleButton.style.display = 'none';
    resetButton.style.display = 'none';

    let newGameButton = document.getElementById('new-game-button');
    newGameButton.addEventListener('click', function () {
        newGameButton.style.display = 'none';
        hitButton.style.display = 'inline';
        stayButton.style.display = 'inline';
        shuffleButton.style.display = 'inline';
        resetButton.style.display = 'inline';
        document.getElementById('computer').innerHTML = "Computer score: " + 0
        document.getElementById('player').innerHTML = "Player score: " + 0
        document.getElementById('totalcompscore').innerHTML = 'Total computer: 0'
        document.getElementById('totalplayerscore').innerHTML = 'Total player: 0'
    })
    shuffleButton.addEventListener('click', function () {
        let computerNumb1 = Math.floor(Math.random() * 10) + 2;
        let computerNumb2 = Math.floor(Math.random() * 10) + 2;
        // console.log(computerNumb1)
        // console.log(computerNumb2)
        document.getElementById('computer').innerHTML = "Computer score: " + computerNumb1 + ", " + computerNumb2
        let yourSocre1 = Math.floor(Math.random() * 10) + 2;
        let yourSocre2 = Math.floor(Math.random() * 10) + 2;
        // console.log(yourSocre1)
        // console.log(yourSocre2)
        document.getElementById('totalcompscore').innerHTML = 'Total computer: ' + (computerNumb1 + computerNumb2)
        document.getElementById('totalplayerscore').innerHTML = 'Total player: ' + (yourSocre1 + yourSocre2)
        document.getElementById('player').innerHTML = "Player score: " + yourSocre1 + ", " + yourSocre2
        if (yourSocre1 + yourSocre2 == 21) {
            result.innerHTML = 'You Won!!!';
        } else if (yourSocre1 + yourSocre2 > 21) {

            result.innerHTML = 'You Lost';
        } else if (computerNumb1 + computerNumb2 == 21) {
            result.innerHTML = 'You lost';
        } else if (computerNumb1 + computerNumb2 == 21 && yourSocre1 + yourSocre2 == 21) {
            result.innerHTML = 'Its a draw'
        }

        hitButton.addEventListener('click', function () {
            let addNewNumber = Math.floor(Math.random() * 10) + 2;
            let totalpl = document.getElementById('player').innerHTML += ", " + addNewNumber
            let totalSplit = totalpl.split(":");
            let numTotalSplit = totalSplit[1].split(', ')
            let TotalPlayerBe = numTotalSplit.reduce(function (prev, num) {
                return prev + +num;
            }, 0);
            if (TotalPlayerBe == 21) {
                result.innerHTML = 'You Won!!!';
            } else if (TotalPlayerBe > 21) {
                result.innerHTML = 'You lost'
            }
            document.getElementById('totalplayerscore').innerHTML = 'Total player: ' + TotalPlayerBe

        })
        stayButton.addEventListener('click', function () {
            let totalpc = document.getElementById('computer').innerHTML
            let totalSplit = totalpc.split(":");
            let numTotalSplit = totalSplit[1].split(', ')
            let TotalCompBe = numTotalSplit.reduce(function (prev, num) {
                return prev + +num;
            }, 0);
            if (TotalCompBe == 21) {
                result.innerHTML = 'You lost'
            } else if (TotalCompBe == 21 && TotalCompBe == 21) {
                result.innerHTML ='Its a draw'
            } else if (TotalCompBe < 20) {
                let computerNumb3 = Math.floor(Math.random() * 10) + 2;
                document.getElementById('computer').innerHTML += ", " + (computerNumb3)

            }
            let totalcomp = document.getElementById('computer').innerHTML
            let totalSplit1 = totalcomp.split(":");
            let numTotalSplit1 = totalSplit1[1].split(', ')
            let TotalCompBe1 = numTotalSplit1.reduce(function (prev, num) {
                return prev + +num;
            }, 0);
            let totalCompBE = document.getElementById('totalcompscore').innerHTML = 'Total computer: ' + TotalCompBe1
            let totalcomp1 = document.getElementById('computer').innerHTML
            let totalSplit2 = totalcomp1.split(":");
            let numTotalSplit2 = totalSplit2[1].split(', ')
            let TotalCompBe2 = numTotalSplit2.reduce(function (prev, num) {
                return prev + +num;
            }, 0);
            let totalPlayerBe = document.getElementById('totalplayerscore').innerHTML
            if (TotalCompBe2 == 21) {
                result.innerHTML = 'You lost'
            } else if (TotalCompBe2 > totalPlayerBe ) {
                result.innerHTML = 'You lost'
            }else if (TotalCompBe2 < totalPlayerBe ) {
                result.innerHTML = 'You Won!!!'
            } else if (TotalCompBe2>21) {
                result.innerHTML = 'You Won!!!'
            }
        })
        resetButton.addEventListener('click', function () {
            document.getElementById('totalcompscore').innerHTML = 'Total computer: 0'
            document.getElementById('totalplayerscore').innerHTML = 'Total player: 0'
            document.getElementById('computer').innerHTML = "Computer score: 0"
            document.getElementById('player').innerHTML = "Player score: 0"
            result.innerHTML = ''

        })
    })


})();

