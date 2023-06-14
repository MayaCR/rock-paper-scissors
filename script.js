// function creates a random selection for the computer
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']

    let randomChoice = Math.floor(Math.random() * 3)
    let returnedChoice = ''

    switch (randomChoice) {
        case 0:
            returnedChoice = choices[0]
            break;
        case 1:
            returnedChoice = choices[1]
            break;
        case 2:
            returnedChoice = choices[2]
            break;
    }
    console.log(returnedChoice)
}

// function executes when player attempts to play the game
function playRound(playerSelection, computerSelection) {
    let playerSelection = ''
    let computerSelection = getComputerChoice()


}