var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById('user-score');
var compScore_span = document.getElementById('computer-score');
var scoreboard_div = document.querySelector('.score-board');
var result_p = document.querySelector('.result p');
var rock_div = document.getElementById('r');
var paper_div = document.getElementById('p');
var scissors_div = document.getElementById('s');
var cheatMode = 0;
var test = 0;

function game (userChoice) {
  var computerChoice = getComputerChoice(userChoice);
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

function convertWord (letter) {
  if (letter === 'r') {
    return 'Rock'
  } else if (letter === 'p') {
    return 'Paper'
  } else {
    return 'Scissors'
  }
}
    
function win (userChoice, computerChoice) {
  var smallUser = 'user'.fontsize(3).sub();
  var smallComp = 'comp'.fontsize(3).sub();
  var userChoice_div = document.getElementById(userChoice);
  userScore++
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertWord(userChoice)}${smallUser} beats ${convertWord(computerChoice)}${smallComp}. You win!`;
  userChoice_div.classList.add('green');
  setTimeout(function() { userChoice_div.classList.remove('green') }, 300);
}

function lose (userChoice, computerChoice) {
  var smallUser = 'user'.fontsize(3).sub();
  var smallComp = 'comp'.fontsize(3).sub();
  var userChoice_div = document.getElementById(userChoice);
  compScore++
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertWord(userChoice)}${smallUser} loses to ${convertWord(computerChoice)}${smallComp}. You lost!`;
  userChoice_div.classList.add('red');
  setTimeout(function() { userChoice_div.classList.remove('red') }, 300);
}

function draw (userChoice, computerChoice) {
  var userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertWord(userChoice)} equals ${convertWord(computerChoice)}. Its a draw!`;
  userChoice_div.classList.add('gray');
  setTimeout(function() { userChoice_div.classList.remove('gray') }, 300);
}

function getComputerChoice (userChoice) {
  var randomNumber;
  switch (cheatMode) {
    case 0:
      var choices = ['r', 'p', 's'];
      randomNumber = Math.floor(Math.random() * 3);
      return choices[randomNumber];
      break;
    case 1:
      if (userChoice === 'r') {
        var choices = ['r', 's'];
      } else if (userChoice === 'p') {
        var choices = ['r', 'p'];
      } else {
        var choices = ['p', 's'];
      }
      randomNumber = Math.floor(Math.random() * 2);
      return choices[randomNumber];
      break;
    case 2:
      if (userChoice === 'r') {
        var choices = ['r', 'p'];
      } else if (userChoice === 'p') {
        var choices = ['s', 'p'];
      } else {
        var choices = ['r', 's'];
      }
      randomNumber = Math.floor(Math.random() * 2);
      return choices[randomNumber];
      break;
  }
}


function main () {
  
  rock_div.addEventListener('click', function() {
    game('r');
  })
  
  paper_div.addEventListener('click', function() {
    game('p');
  })
  
  scissors_div.addEventListener('click', function() {
    game('s');
  })
}

function cheat () {
  var x = event.which;
  if (x === 99) {
    if (test === 0) {
      document.getElementById('cheat-menu').style.display = 'inline-block';
      test = 1;
    } else {
      document.getElementById('cheat-menu').style.display = 'none';
      test = 0;
    }
  }
}

main();