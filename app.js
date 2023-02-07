const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice,computerChoice,result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
     userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor((Math.random()*3))+1;
    console.log(randomNumber);
    if(randomNumber===1){
        computerChoice='🪨';
    }
    if(randomNumber===2){
        computerChoice='🧻';
    }
    if(randomNumber===3){
        computerChoice='✂️';
    }
    computerChoiceDisplay.innerHTML=computerChoice;
}
function getResult(){
if(computerChoice === userChoice){
    result = 'It is a draw!';
}
if(computerChoice === '🪨' && userChoice==='🧻'){
    result = 'You Win🥳';
}
if(computerChoice === '🪨' && userChoice==='✂️'){
    result = 'You Lose☹️';
}
if(computerChoice === '🧻' && userChoice==='✂️'){
    result = 'You Win🥳';
}
if(computerChoice === '🧻' && userChoice==='🪨'){
    result = 'You Lose☹️';
}
if(computerChoice === '✂️' && userChoice==='🧻'){
    result = 'You Lose☹️';
}
if(computerChoice === '✂️' && userChoice==='🪨'){
    result = 'You Win🥳';
}
resultDisplay.innerHTML=result;
}