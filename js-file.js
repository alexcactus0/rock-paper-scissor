     
        const getComputerChoice = () => {
            const compDecision = document.querySelector(".comp");
            const options = ["rock", "paper", "scissor"];
            const randomOption = Math.floor(Math.random() * options.length);
            const choice = options[randomOption];
            compDecision.textContent = (choice);
            return choice;
        };

        let humanScore = 0;
        let computerScore = 0;
        let round = 0;

        const playRound = (humanChoice, computerChoice) => {
            const decision = document.querySelector(".winnerboard");

            if (humanChoice === computerChoice) {
                decision.textContent = "It's a draw!";

            } else if ( humanChoice === "rock" && computerChoice === "scissor" ||
                        humanChoice === "paper" && computerChoice === "rock" ||
                        humanChoice === "scissor" && computerChoice === "paper")

              { humanScore++;
                decision.textContent = `You win ${humanChoice} beats ${computerChoice}!`; }

              else { computerScore++;
                    decision.textContent = `You lost ${computerChoice} beats ${humanChoice}!`; }
        
                humanScoreDiv.textContent = `${humanScore}`;
                computerScoreDiv.textContent = `${computerScore}`;
        };

        const humanScoreDiv = document.getElementById("player-score");
        const computerScoreDiv = document.getElementById("computer-score");

        
    const humanSelection = (callback) => {
        const rockBtn = document.getElementById("rock");
        const paperBtn = document.getElementById("paper");
        const scissorBtn = document.getElementById("scissor");

        rockBtn.addEventListener("click", () => callback("rock"));
        paperBtn.addEventListener("click", () => callback("paper"));
        scissorBtn.addEventListener("click", () => callback("scissor"));
    };

    const handleClick = (choice) => {
        if (round < 5) {
            round++;
            const computerChoice = getComputerChoice();
            callback(choice, computerChoice);

            if (round === 5) {
                setTimeout(() => {
                    humanScore < computerScore ? 'You lost against a Computer skull emoji' : humanScore > computerScore ? 'Congrats you won!' : "It's a tie!";
                }, 500)
            }
        }
    }

        const playGame = () => {
                humanSelection((playerChoice) => {
                    const computerChoice = getComputerChoice();
                    playRound(playerChoice, computerChoice);
            });
        };

playGame();
