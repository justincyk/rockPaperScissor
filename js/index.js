function computerPlay()
{
  let moves = ["Rock", "Paper", "Scissor"];
  let index = Math.floor(Math.random()*3);
  return moves[index];
}

function playRound(playerSelect, computerSelect)
{
  let playerSelection = playerSelect.toLowerCase();
  let computerSelection = computerSelect.toLowerCase();
  if ( playerSelection === "paper" && computerSelection === "rock" )
  {
    return "You Win! Paper beats rock.";
  }
  else if ( playerSelection === "rock" && computerSelection === "paper" )
  {
    return "You Lose! Paper beats rock.";
  }
  else if ( playerSelection === "paper" && computerSelection === "scissor" )
  {
    return "You Lose! Scissors beats paper.";
  }
  else if ( playerSelection === "scissor" && computerSelection === "paper" )
  {
    return "You Win! Scissors beats paper.";
  }
  else if ( playerSelection === "rock" && computerSelection === "scissors" )
  {
    return "You Win! Rock beats scissors";
  }
  else if ( playerSelection === "scissor" && computerSelection === "rock" )
  {
    return "You Lose! Rock beats scissors";
  }
  else
  {
    return `It's a Tie! You guys both did ${playerSelection}.`
  }
}


function game()
{
  for( let i = 0; i < 5; ++i )
  {
    let playerSelect = prompt("What move do you want to make?");
    let computerSelect = computerPlay();
    console.log(playRound(playerSelect, computerSelect));
  }
}

game();
