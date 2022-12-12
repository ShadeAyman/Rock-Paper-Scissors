
let humanScore=0;
let computerScore=0;
let round=0;

const pcchoice = document.querySelector('.pcchoice');

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
        pcchoice.appendChild('img');

        return "SCISSORS" ;
    }
}
let reset =()=>{
    humanScore =0 ;
    computerScore=0;
    update();
}
function update()
{
    hScore.textContent = humanScore;
    cScore.textContent= computerScore;
}



function playRound(playerInbut , computerInbut = getComputerChoice()) {

    userinut = playerInbut.toUpperCase();

    if (userinut == computerInbut) {

        return "Draw";
    }
    
    if(userinut == "PAPER" & computerInbut == "ROCK")
    {
        humanScore++;
        update();
    }
    if(userinut == "PAPER" & computerInbut == "SCISSORS")
    {
        computerScore++;
        update();

    }  

    if(userinut == "ROCK" & computerInbut == "SCISSORS")
    {
        humanScore++;
        update();
    }
    if(userinut == "ROCK" & computerInbut == "PAPER")
    {
        computerScore++;
        update();
    }

 
    if(userinut == "SCISSORS" & computerInbut == "PAPER")
    {
        humanScore++;
        update();
    }   
    if(userinut == "SCISSORS" & computerInbut == "ROCK")
    {
        computerScore++;
        update();
    }
    else{
        return  "enter a proper value";
    }
}

//viewing the schore and reseting
const hScore = document.querySelector('.humanScore');

hScore.textContent = humanScore;
const cScore = document.querySelector('.computerScore');
cScore.textContent= computerScore;
const reseting = document.querySelector('.reset');
reseting.addEventListener('click',reset);

const Rock = document.querySelector('.rock');
const Paper = document.querySelector('.paper');
const Scissors = document.querySelector('.scissors')



Rock.addEventListener('click',()=> playRound("ROCK"));
Paper.addEventListener('click',()=> playRound("paper"));
Scissors.addEventListener('click',()=> playRound("scissors"));


// const playerSelection = prompt("Enter ROCK PAPER or SCISSORS") ;
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection))

// function game (){
// for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt("Enter ROCK PAPER or SCISSORS") ;//take user inbut
//     const computerSelection = getComputerChoice();//calls the computer function 
//     console.log(playRound(playerSelection)) //starts the game py calling the playround function 
// }
// console.log(`YOU won ${humanScore} games out of 5`)
// reset(); //to reset the schoor
// }


/*
starts with a play() screen

first to 5 wins win

show victory/death screen

 */