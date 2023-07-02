const rock = 'камень';
const paper = 'бумага';
const scissors = 'ножницы';

const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.btn');
//const results = document.querySelector('.results');
const results = document.createElement('div');
const wins = document.createElement('div');

results.classList.add('results');

container.appendChild(results);

wins.classList.add('wins');
wins.style.cssText = 'text-align: center; color: red; font-size: 22px; font-weight: bold; font-style: italic;';


let playerScore = 0;
let computerScore = 0;


function getRandomNumber(min, max) {
  let rand = Math.random() * (max - min) + min;
  return Math.floor(rand);
}

function computerPlay() {
  const cases = [rock, paper, scissors];
  let result = getRandomNumber(0, 3);
  return cases[result];

}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Ничья";
  } else if (playerSelection === rock && computerSelection === paper) {
    return "Вы проиграли! Бумага бьет камень.";
  } else if (playerSelection === paper && computerSelection === rock) {
    return "Вы выиграли! Бумага бьет камень.";
  } else if (playerSelection === scissors && computerSelection === rock) {
    return "Вы проиграли! Камень бьет ножницы.";
  } else if (playerSelection === rock && computerSelection === scissors) {
    return "Вы выиграли! Камень бьет ножницы.";
  } else if (playerSelection === scissors && computerSelection === paper) {
    return "Вы выиграли! Ножницы бьёт бумагу.";
  } else if (playerSelection === paper && computerSelection === scissors) {
    return "Вы проиграли! Ножницы бьёт бумагу.";
  } else {
    return "Вы ввели неправильно!";
  }
    
}



function playerPlayOld() {
  let result = prompt("Игра камень ножницы бумага. Что вводите.");
  return result;
}


function gameOld() {

  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlayOld();
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    alert(roundResult);
    if (roundResult.includes('выиграли')) {
      playerScore += 1;       
    } else if (roundResult.includes('проиграли')) {
      computerScore += 1;
    }
  }
  
  alert(showResult);
}

function showResult() {
  let result = "Общий счёт: Человек - " + playerScore + " компьютер - " + computerScore; 
  let wins = playerScore > computerScore ? "Выиграл человек!" : 
             playerScore < computerScore ? "Выиграл компьютер!" : "Ничья!";
  return result + "\n" + wins;

}

function game() {
  let playerSelection = null;
  buttons.forEach(btn => {     
      btn.addEventListener('click', e => {
        let computerSelection = computerPlay();
 
        playerSelection = e.target.innerText;
        let roundResult = playRound(playerSelection, computerSelection);
       
        if (roundResult.includes('выиграли')) {
          playerScore += 1;       
        } else if (roundResult.includes('проиграли')) {
          computerScore += 1;
        }
        results.innerText = roundResult;
        if (playerScore === 5 || computerScore === 5) {
         wins.innerText = showResult();
         results.appendChild(wins);
         alert('Game Over');
         computerScore = 0;
         playerScore = 0;
        }
      });
     
  });

}
game();
