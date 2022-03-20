function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomPlay = Math.floor(Math.random() * 3);
    return choice[randomPlay]
}


function playRound(playSelection, computerSelection) {
    const computerChoice = computerPlay()
    const playerChoice = prompt("Choose you're weapon!").toLowerCase();

    if (playerChoice === computerChoice) {
        return ('Tie!')
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return ('Lose!')
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return ('Win!')
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return ('Win!')
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return ('Lose!'))
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return ('Lose!')
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return ('Win!')
    }

}







