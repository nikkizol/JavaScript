(() => {
    let computer = document.getElementById('computer');
    let player = document.getElementById('player');
    let totalScore = document.getElementById('totalcompscore');
    let totalPlayerScore = document.getElementById('totalplayerscore');
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
        computer.innerHTML = "Computer score: " + 0
        player.innerHTML = "Player score: " + 0
        totalScore.innerHTML = 'Total computer: ' + 0
        totalPlayerScore.innerHTML = 'Total player: ' + 0
    });
    shuffleButton.addEventListener('click', function () {
        let computerNumb1 = Math.floor(Math.random() * 10) + 2;
        let computerNumb2 = Math.floor(Math.random() * 10) + 2;

        computer.innerHTML = "Computer score: " + computerNumb1 + ", " + computerNumb2
        let yourSocre1 = Math.floor(Math.random() * 10) + 2;
        let yourSocre2 = Math.floor(Math.random() * 10) + 2;

        totalScore.innerHTML = 'Total computer: ' + (computerNumb1 + computerNumb2);
        totalPlayerScore.innerHTML = 'Total player: ' + (yourSocre1 + yourSocre2);
        player.innerHTML = "Player score: " + yourSocre1 + ", " + yourSocre2
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
            player.innerHTML += ", " + addNewNumber
            let totalSplit = player.innerHTML.split(":");
            let numTotalSplit = totalSplit[1].split(', ')
            let TotalPlayerBe = numTotalSplit.reduce(function (prev, num) {
                return prev + +num;
            }, 0);
            let totalSplit1 = computer.innerHTML.split(":");
            let numTotalSplit1 = totalSplit1[1].split(', ')
            let TotalCompBe1 = numTotalSplit1.reduce(function (prev, num) {
                return prev + +num;
            }, 0);
            totalPlayerScore.innerHTML = 'Total player: ' + TotalPlayerBe;
            if (TotalPlayerBe == 21) {
                result.innerHTML = 'You Won!!!';
            } else if (TotalPlayerBe > 21) {
                result.innerHTML = 'You lost'
            } else if (TotalPlayerBe == TotalCompBe1 && TotalPlayerBe == 20) {
                result.innerHTML = 'Its a draw'
            } else if (TotalCompBe1>21) {
                result.innerHTML = 'You Won!!!';
            } else if (TotalPlayerBe>21) {
                result.innerHTML = 'You lost';
            }
            totalPlayerScore.innerHTML = 'Total player: ' + TotalPlayerBe;
        })

        stayButton.addEventListener('click', function () {
            let totalCompScore = document.getElementById('totalcompscore');
            let totalSplit = totalCompScore.innerHTML.split(":");
            let numTotalSplit = totalSplit[1].split(', ')
            let TotalCompBe = numTotalSplit.reduce(function (prev, num) {
                return prev + +num;
            }, 0);
            let totalSplit2 = player.innerHTML.split(":");
            let numTotalSplit2 = totalSplit2[1].split(', ')
            let TotalPlayerBe = numTotalSplit2.reduce(function (prev, num) {
                return prev + +num;
            }, 0);
            if (TotalCompBe == 21) {
                result.innerHTML = 'You lost'
            } else if (TotalCompBe == 21 && TotalCompBe == 21) {
                result.innerHTML = 'Its a draw'
            } else if (TotalCompBe > TotalPlayerBe) {
                result.innerHTML = 'You lost'
            } else if (TotalCompBe < 20) {
                let intervalId = setInterval(function () {
                    let randomNumber = Math.round(Math.random() * 10) + 2;
                    computer.innerHTML += ", " + (randomNumber);
                    let totalSplit1 = computer.innerHTML.split(":");
                    let numTotalSplit1 = totalSplit1[1].split(', ')
                    let TotalCompBe1 = numTotalSplit1.reduce(function (prev, num) {
                        return prev + +num;
                    }, 0);
                    if (TotalCompBe1 > 21) {
                        result.innerHTML = 'You Won!!!'
                    }
                    if (TotalCompBe1 > TotalPlayerBe && TotalCompBe1 <= 21) {
                        result.innerHTML = 'You Lost'
                    }
                    // if (TotalCompBe1 < TotalPlayerBe && TotalPlayerBe <= 21) {
                    //     result.innerHTML = 'You Won!!!'
                    // }
                    if (TotalCompBe1 == 21 && TotalPlayerBe == 21) {
                        result.innerHTML = 'Its a draw'
                    }
                    if (TotalCompBe1 == 21) {
                        result.innerHTML = 'You Lost'
                    }
                    if (TotalCompBe1 > TotalPlayerBe || TotalCompBe1 >= 21) clearInterval(intervalId);
                    totalCompScore.innerHTML = 'Total computer: ' + TotalCompBe1;

                }, 1000);

            }
        })
        resetButton.addEventListener('click', function () {
            window.location.reload();
        })

    })

})();

