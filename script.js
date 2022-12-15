//stats
let humanScore = 0;
let computerScore = 0;
let round = 0;
let playerchice = "";
let computerchice = "";
//selectors
const hScore = document.querySelector('.humanScore');
const cScore = document.querySelector('.computerScore');
const reseting = document.querySelector('.reset');
const Rock = document.querySelector('.rock');
const Paper = document.querySelector('.paper');
const Scissors = document.querySelector('.scissors')
const pcchoice = document.querySelector('.pcchoice')
const human = document.querySelector('.human');
const computer = document.querySelector('.computer');
const pcImgChoice = document.createElement('img')
const overlay = document.querySelector('.overlay');
const overlayStart = document.querySelector('.start');
const Victoryscreen = document.querySelector('.Victory');
const Defeatscreen = document.querySelector('.Defeat');
const playagain = document.querySelector('.playagain');
const playagain2 = document.querySelector('.playagain2');

pcchoice.appendChild(pcImgChoice);
pcImgChoice.src = './imgs/rock.png';//place holder till the playround function start


//-----functions----//
function getComputerChoice() { //function to return a random word(rock paper scissors)
    let min = 1;
    let max = 3;
    let rando = Math.floor(Math.random() * (max - min + 1)) + min;
    if (rando == 1) {
        return "ROCK";
    }
    if (rando == 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
let reset = () => { //the reset button
    humanScore = 0;
    computerScore = 0;
    playerchice = "";
    computerchice = "";
    update();
}
function update() {
    hScore.textContent = humanScore;
    cScore.textContent = computerScore;
    human.textContent = playerchice;
    computer.textContent = computerchice;
}
function playRound(playerInbut, computerInbut = getComputerChoice()) {//starts the game
    userinut = playerInbut.toUpperCase();
    if (userinut == computerInbut) {
        playerchice = userinut;
        computerchice = computerInbut;
        update();
        if (userinut == "ROCK") {
            pcImgChoice.src = './imgs/rock.png';
        }
        if (userinut == "PAPER") {
            pcImgChoice.src = './imgs/mail.png';

        } else {
            pcImgChoice.src = './imgs/cut.png';
        }
    }
    if (userinut == "PAPER" & computerInbut == "ROCK") {
        humanScore++;
        playerchice = userinut;
        computerchice = computerInbut;
        update();
        pcImgChoice.src = './imgs/rock.png';
    }
    if (userinut == "PAPER" & computerInbut == "SCISSORS") {
        computerScore++;
        playerchice = userinut;
        computerchice = computerInbut;
        update();
        pcImgChoice.src = './imgs/cut.png';
    }

    if (userinut == "ROCK" & computerInbut == "SCISSORS") {
        humanScore++;
        playerchice = userinut;
        computerchice = computerInbut;
        update();
        pcImgChoice.src = './imgs/cut.png';
    }
    if (userinut == "ROCK" & computerInbut == "PAPER") {
        computerScore++;
        playerchice = userinut;
        computerchice = computerInbut;
        update();
        pcImgChoice.src = './imgs/mail.png';
    }
    if (userinut == "SCISSORS" & computerInbut == "PAPER") {
        humanScore++;
        playerchice = userinut;
        computerchice = computerInbut;
        update();
        pcImgChoice.src = './imgs/mail.png';
    }
    if (userinut == "SCISSORS" & computerInbut == "ROCK") {
        computerScore++;
        playerchice = userinut;
        computerchice = computerInbut;
        update();
        pcImgChoice.src = './imgs/rock.png';
    }
    whowon();
}
function whowon() //to display the victory screen//
{
    if (humanScore == 5) {
        Victoryscreen.style.display = 'flex';
        reset()
    }

    if (computerScore == 5) {
        Defeatscreen.style.display = 'flex';
        reset()
    }
}

//events
reseting.addEventListener('click', reset);
Rock.addEventListener('click', () => playRound("ROCK"));
Paper.addEventListener('click', () => playRound("paper"));
Scissors.addEventListener('click', () => playRound("scissors"));
overlayStart.addEventListener('click', () => { overlay.style.display = "none"; })
playagain.addEventListener('click', () => { Victoryscreen.style.display = "none"; })
playagain2.addEventListener('click', () => { Defeatscreen.style.display = "none"; })