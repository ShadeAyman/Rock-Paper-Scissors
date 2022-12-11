
let humanScore=0;
let computerScore=0;
let round=0;

function getComputerChoice () { //function to return a random word(rock paper scissors)
    let min = 1;
    let max = 3;
    let rando = Math.floor(Math.random() * (max - min + 1)) + min;
    if (rando ==1 ) {
        return "ROCK";        
    }
    if (rando == 2) {
        return "PAPER";
    } else {
        return "SCISSORS" ;
    }
}
let reset =()=>{humanScore =0 ;computerScore=0;} 




function playRound(TEST , computerInbut = getComputerChoice()) {

    userinut = TEST.toUpperCase();

    if (userinut == computerInbut) {
        return "Draw";
    }
    
 
    if(userinut == "PAPER" & computerInbut == "ROCK")
    {
        humanScore++;

        return "You WIN";
    }
    if(userinut == "PAPER" & computerInbut == "SCISSORS")
    {
        return "You Lose";
        computerScore++;
    }  



    if(userinut == "ROCK" & computerInbut == "SCISSORS")
    {
        humanScore++;

        return "You win";
    }
    if(userinut == "ROCK" & computerInbut == "PAPER")
    {
        return "You Lose";
        computerScore++;

    }

 
    if(userinut == "SCISSORS" & computerInbut == "PAPER")
    {
        humanScore++;

        return "You Win";
    }   
    if(userinut == "SCISSORS" & computerInbut == "ROCK")
    {

        return "You LOSE";
        computerScore++;

    }
    else{
        return  "enter a proper value";
    }
}




// const playerSelection = prompt("Enter ROCK PAPER or SCISSORS") ;
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection))

function game (){
for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter ROCK PAPER or SCISSORS") ;//take user inbut
    const computerSelection = getComputerChoice();//calls the computer function 
    console.log(playRound(playerSelection)) //starts the game py calling the playround function 
}
console.log(`YOU won ${humanScore} games out of 5`)
reset(); //to reset the schoor
}


