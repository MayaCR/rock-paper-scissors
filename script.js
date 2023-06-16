function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3)

    switch (randomChoice) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
    }
}

let playerScore = 0
let computerScore = 0

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    
	function playRound(playerSelection, computerSelection) {
        playerSelection = prompt().toLowerCase()
        computerSelection = getComputerChoice()

        console.log('player ' + playerSelection);
        console.log('player score ' + playerScore)
        console.log('computer ' + computerSelection);
        console.log('computer score ' + computerScore)

        if (playerSelection === computerSelection) {
            console.log('Tie');
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            console.log('You won this round!');
            playerScore += 1
        } else {
            console.log('You lost this round!');
            computerScore += 1
        }
    }

    playerScore > computerScore ? console.log('Congratulations! You won this match.') : console.log('Sorry you lost this match.')

}

game()

