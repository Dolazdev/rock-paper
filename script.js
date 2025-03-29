let humanScore = 0
let computerScore = 0


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    console.log(choices[randomIndex])
    return choices[randomIndex];
    
}


function getHumanChoice(){
    let userInput = prompt('What is your pick? (rock, paper or scissors)').toLowerCase();
    console.log(userInput)
    return userInput
}


function playRound(humanChoice, computerScore){
    if (humanChoice === computerScore){
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerScore === 'scissors') ||
        (humanChoice === 'paper' && computerScore === 'rock') ||
        (humanChoice === 'scissors' && computerScore === 'paper')
    ){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerScore}`;
    } else {
        computerScore++;
        return `You lose! ${computerScore} beats ${humanChoice}`;
    }
}


function playGame(){
    console.log('Welcome to Rock, Paper, Scissors!')
    console.log('You will play 5 rounds against the computer')
    console.log('The first to 5 points wins')
    for (let i = 0; i < 5; i++){
        const computerChoice = getComputerChoice()
        const humanChoice = getHumanChoice()
        console.log(playRound(computerChoice, humanChoice))
    }

    if (humanScore > computerScore){
        console.log(`You win! ${humanScore} to ${computerScore}`)
    }
    else if (computerScore > humanScore){
        console.log(`You lose! ${computerScore} to ${humanScore}`)
    }
    else{
        console.log(`It's a tie! ${humanScore} to ${computerScore}`)
    }

    humanScore = 0
    computerScore = 0
    console.log('Scores have been reset')
    console.log(`Your score: ${humanScore}`)
    console.log(`Computer score: ${computerScore}`)
    return humanScore, computerScore
}


playGame()