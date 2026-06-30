let humanScore=0;//global variable
let computerScore=0;//global variable

//get computer choice
function getComputerChoice(){
    const random=Math.random();
    if(random < 0.33){
        return "rock";
    }else if(random < 0.66){
        return "paper";
    }else{
        return "scissors";
    }

}
//Get human choice
function getHumanChoice(){
    const choice= prompt("Please enter rock,paper,scissors:");
    return choice.toLowerCase();
}
//play a single round
function playRound(humanChoice , computerChoice){
    humanChoice= humanChoice.toLowerCase();

    if( humanScore === computerChoice){
        console.log("it is a tie!");
    }else if(
        (humanScore === "rock" && computerChoice === "scissors")||
        (humanScore === "paper" && computerChoice === "rock")||
        (humanScore === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        console.log(`you win girl! ${humanChoice} beats ${computerChoice} `);
    }else{
        computerScore++;
        console.log(` you lose! ${computerChoice} beats ${humanChoice}`);
    }
}
//play the full round(5)
function playGame(){
    humanScore = 0;
    computerScore = 0;
    for(i=1;i<=5;i++){
        console.log(`Round ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection , computerSelection);
        console.log(`score: you ${humanScore} - computer ${computerScore}`);
    }
    console.log("...Game Over...");
    if(humanScore > computerScore){
        console.log(`you win the game girl! ${humanScore} - ${computerScore} `);
    }else if( computerScore > humanScore){
        console.log(`Computer wins the game! ${computerScore} - ${humanScore}`);
    }else{
        console.log(`The game is a tie!`);
    }
}
playGame();