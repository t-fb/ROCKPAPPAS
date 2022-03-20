function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomPlay = Math.floor(Math.random() * 3);
    return choice[randomPlay]
}

const randomPlay = computerPlay()
console.log(randomPlay);