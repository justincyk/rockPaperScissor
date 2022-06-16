function computerPlay()
{
  let moves = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random()*3);
  return moves[index];
}

function playRound(playerSelect, computerSelect)
{
  let playerSelection = playerSelect.toLowerCase();
  let computerSelection = computerSelect.toLowerCase();
  if ( playerSelection === "paper" && computerSelection === "rock" )
  {
    return "Win";
  }
  else if ( playerSelection === "rock" && computerSelection === "paper" )
  {
    return "Lose";
  }
  else if ( playerSelection === "paper" && computerSelection === "scissor" )
  {
    return "Lose";
  }
  else if ( playerSelection === "scissor" && computerSelection === "paper" )
  {
    return "Win";
  }
  else if ( playerSelection === "rock" && computerSelection === "scissors" )
  {
    return "Win";
  }
  else if ( playerSelection === "scissor" && computerSelection === "rock" )
  {
    return "Lose";
  }
  else
  {
    return "Tie";
  }
}

let moves = document.querySelectorAll(".move");
let userWins = 0;
let computerWins = 0;
let count = 0;

moves.forEach( (move) => move.addEventListener('click', (e) =>
{
  let result = document.querySelector('.result');
  result.setAttribute('style','white-space: pre;');
  const computerMove = computerPlay();
  result.textContent = `Player chose: ${e.target.id} & Computer chose: ${computerMove}.\r\n`;
  let winner =  playRound(e.target.id, computerMove);
  result.textContent += winner;
  ++count;
  updateGame(winner, count);
}
));


function updateGame(winner, count){
  let user = document.querySelector('#user');
  let computer = document.querySelector('#computer');
  if( winner === "Tie")
  {
    ++userWins;
    ++computerWins;
  }
  else winner === "Win" ? ++userWins : ++computerWins;
  user.textContent = userWins;
  computer.textContent = computerWins;

  if ( count  === 5 )
  {
    const winner = userWins > computerWins ? "User" : "Computer";
    let result = document.querySelector('.result');
    result.textContent = `The game has finished. ${ result === "User" ? "You have won the game!" :
    "The Computer has won the game!"}`;
    count = 0;
    userWins = 0;
    computerWins = 0;
  }
  return;
}


// function game()
// {
//   for( let i = 0; i < 5; ++i )
//   {
//     let playerSelect = prompt("What move do you want to make?");
//     let computerSelect = computerPlay();
//     console.log(playRound(playerSelect, computerSelect));
//   }
// }

// game();
