const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice,computerChoice,result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
     userChoice = e.target.id
    userChoiceDisplay.innerHTML = "<br />" + userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor((Math.random()*3))+1;
    console.log(randomNumber);
    if(randomNumber===1){
        computerChoice='rock';
    }
    if(randomNumber===2){
        computerChoice='paper';
    }
    if(randomNumber===3){
        computerChoice='scissor';
    }
    computerChoiceDisplay.innerHTML="<br />" + computerChoice;
}
function getResult(){
if(computerChoice === userChoice){
    result = 'It is a draw!';
}
if(computerChoice === 'rock' && userChoice==='paper'){
    result = 'You Win🥳';
}
if(computerChoice === 'rock' && userChoice==='scissor'){
    result = 'You Lose☹️';
}
if(computerChoice === 'paper' && userChoice==='scissor'){
    result = 'You Win🥳';
}
if(computerChoice === 'paper' && userChoice==='rock'){
    result = 'You Lose☹️';
}
if(computerChoice === 'scissor' && userChoice==='paper'){
    result = 'You Lose☹️';
}
if(computerChoice === 'scissor' && userChoice==='rock'){
    result = 'You Win🥳';
}
resultDisplay.innerHTML="<br />" + result;
}