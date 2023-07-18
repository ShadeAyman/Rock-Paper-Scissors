//stats
let humanScore = 0;
let computerScore = 0;
let round = 0;
let playerChoice = "";
let computerChoice = "";
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
    let rando = Math.floor(Math.random() * (max - min + 1)) + min; //formula from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
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
    playerChoice = "";
    computerChoice = "";
    update();
}
function update() {// to update the ui
    hScore.textContent = humanScore;
    cScore.textContent = computerScore;
    human.textContent = playerChoice;
    computer.textContent = computerChoice;
}
function playRound(playerInput, computerInput = getComputerChoice()) {//starts the game(core game logic)
    if (playerInput == computerInput) {
        playerChoice = playerInput;
        computerChoice = computerInput;
        if (playerInput == "ROCK") {
            pcImgChoice.src = './imgs/rock.png';
        }
        if (playerInput == "PAPER") {
            pcImgChoice.src = './imgs/mail.png';
        }
        else {
            pcImgChoice.src = './imgs/cut.png';
        }
    }
    if (playerInput == "PAPER" & computerInput == "ROCK") {
        humanScore++;
        pcImgChoice.src = './imgs/rock.png';
    }
    if (playerInput == "ROCK" & computerInput == "SCISSORS") {
        humanScore++;
        pcImgChoice.src = './imgs/cut.png';
    }
    if (playerInput == "SCISSORS" & computerInput == "PAPER") {
        humanScore++;
        pcImgChoice.src = './imgs/mail.png';
    }
    if (playerInput == "PAPER" & computerInput == "SCISSORS") {
        computerScore++;
        pcImgChoice.src = './imgs/cut.png';
    }
    if (playerInput == "ROCK" & computerInput == "PAPER") {
        computerScore++;
        pcImgChoice.src = './imgs/mail.png';
    }
    if (playerInput == "SCISSORS" & computerInput == "ROCK") {
        computerScore++;
        pcImgChoice.src = './imgs/rock.png';
    }
    playerChoice = playerInput;
    computerChoice = computerInput;
    update();
    whowon();
}
function whowon() //to display the victory /defeat screen//
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
Paper.addEventListener('click', () => playRound("PAPER"));
Scissors.addEventListener('click', () => playRound("SCISSORS"));
overlayStart.addEventListener('click', () => { overlay.style.display = "none"; })
playagain.addEventListener('click', () => { Victoryscreen.style.display = "none"; })
playagain2.addEventListener('click', () => { Defeatscreen.style.display = "none"; })