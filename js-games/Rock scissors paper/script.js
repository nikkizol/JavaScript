(() => {
    document.getElementById('rock').addEventListener('click', function () {
        document.getElementById('target').innerHTML = 'rock'
        document.getElementById('comp').innerHTML = ""
        document.getElementById('result').innerHTML = ""
    });
    document.getElementById('scissors').addEventListener('click', function () {
        document.getElementById('target').innerHTML = 'scissors'
        document.getElementById('comp').innerHTML = ""
        document.getElementById('result').innerHTML = ""
    });
    document.getElementById('paper').addEventListener('click', function () {
        document.getElementById('target').innerHTML = 'paper'
        document.getElementById('comp').innerHTML = ""
        document.getElementById('result').innerHTML = ""
    });

    document.getElementById('START').addEventListener('click', Choice)

    function Choice() {
        let myChoice = document.getElementById('target').innerHTML
        let randomChoice = Math.floor(Math.random() * 3);
        if (randomChoice === 0) {
            randomChoice = "rock";
        } else if (randomChoice === 1) {
            randomChoice = "paper";
        } else if (randomChoice === 2) {
            randomChoice = "scissors";
        }
        document.getElementById('START').addEventListener('click', compare)

        function compare(choice1, choice2) {
            if (choice1 === choice2) {
                return "It's a draw 🤷‍️";
            } else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    return "You win!🔥"
                } else if (choice2 === "paper") {
                    return "You lost💩";
                }
            } else if (choice1 === "paper") {
                if (choice2 === "scissors") {
                    return "You lost💩"
                } else if (choice2 === "rock") {
                    return "You win!🔥";
                }
            } else if (choice1 === "scissors") {
                if (choice2 === "paper") {
                    return "You win!🔥"
                } else if (choice2 === "rock") {
                    return "You lost💩";
                }

            }

        }

        document.getElementById('comp').innerHTML = " " + randomChoice;
        document.getElementById('result').innerHTML = " " + (compare(myChoice, randomChoice));

    }


})();

