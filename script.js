//stats
let humanScore=0;
let computerScore=0;
let round=0;
let playerchice="";
let computerchice="";

// const imgrock = document.createElement('img')
// const imgpapper = document.createElement('img')
// const imgscissors = document.createElement('img')
// imgrock.src='./imgs/rock.png';
// imgpapper.src='./imgs/mail.png';
// imgscissors.src='./imgs/cut.png';

//selectors
const hScore = document.querySelector('.humanScore');
const cScore = document.querySelector('.computerScore');
const reseting = document.querySelector('.reset');
const Rock = document.querySelector('.rock');
const Paper = document.querySelector('.paper');
const Scissors = document.querySelector('.scissors')
const pcchoice= document.querySelector('.pcchoice')
const human = document.querySelector('.human');
const computer = document.querySelector('.computer');



//functions
function getComputerChoice () { //function to return a random word(rock paper scissors)
    let min = 1;
    let max = 3;
    let rando = Math.floor(Math.random() * (max - min + 1)) + min;
    if (rando ==1 ) {
        // pcchoice.appendChild(imgrock);
        return "ROCK";        
    }
    if (rando == 2) {
        // pcchoice.appendChild(imgpapper);

        return "PAPER";
    } else {
        // pcchoice.appendChild(imgscissors);
        return "SCISSORS" ;
    }

}

let reset =()=>{ //the reset button
    humanScore =0 ;
    computerScore=0;
    playerchice="";
    computerchice="";
    update();
}
function update()
{
    hScore.textContent = humanScore;
    cScore.textContent= computerScore;
    human.textContent=playerchice;
    computer.textContent=computerchice;
    pcchoice.toggleAttribute('pcchoice')
    pcchoice.toggleAttribute('pcchoice')

    pcchoice.removeChild(imgrock)
    pcchoice.removeChild(imgpapper)
    pcchoice.removeChild(imgscissors)
}


function playRound(playerInbut , computerInbut = getComputerChoice()) {//starts the game

    userinut = playerInbut.toUpperCase();

    if (userinut == computerInbut) {
        playerchice = userinut;
        computerchice=computerInbut;
        update();
    }
    
    if(userinut == "PAPER" & computerInbut == "ROCK")
    {
        humanScore++;
        playerchice = userinut;
        computerchice=computerInbut;
        
        update();
    }
    if(userinut == "PAPER" & computerInbut == "SCISSORS")
    {
        computerScore++;
        playerchice = userinut;
        computerchice=computerInbut;
        
        update();

    }  

    if(userinut == "ROCK" & computerInbut == "SCISSORS")
    {
        humanScore++;
        playerchice = userinut;
        computerchice=computerInbut;
        update();
    }
    if(userinut == "ROCK" & computerInbut == "PAPER")
    {
        computerScore++;
        playerchice = userinut;
        computerchice=computerInbut;
        update();
    }

 
    if(userinut == "SCISSORS" & computerInbut == "PAPER")
    {
        humanScore++;
        playerchice = userinut;
        computerchice=computerInbut;
        update();
    }   
    if(userinut == "SCISSORS" & computerInbut == "ROCK")
    {
        computerScore++;
        playerchice = userinut;
        computerchice=computerInbut;
        update();
    }
    else{
        return  "enter a proper value";
    }
}
//events
reseting.addEventListener('click',reset);
Rock.addEventListener('click',()=> playRound("ROCK"));
Paper.addEventListener('click',()=> playRound("paper"));
Scissors.addEventListener('click',()=> playRound("scissors"));


humanScore.addEventListener(humanScore==5,()=>{human.textContent='victory'; reset();})

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