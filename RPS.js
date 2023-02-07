'use strict';

//score accumulater
let playerScore = 0
let compScore = 0


//computer throws moves randomly
const computerplay = () => {
   const arrofchoices = ['rock' , 'paper' , 'scissors']
   const randomNum = Math.floor(Math.random() *arrofchoices.length)
   const compChoice = arrofchoices[randomNum]
   console.log(`Computer threw ${compChoice}`);
   return compChoice;
}


//the game rules
  const playRound = (playerSelection, computerSelection) => {
      if(playerSelection === computerSelection){
       return `Tie! both picked ${playerSelection}.` //can also put computerSelection but both are ame so doesnt matter
     }

      
     else if (playerSelection === "scissors" && computerSelection === "rock"){
      compScore++
      return "you lost! rock crushes scissors.";
     }
     else if (playerSelection === "scissors" && computerSelection === "paper"){
     playerScore++
      return "you won ! scissors cuts paper.";
     }
     else if (playerSelection === "rock" && computerSelection === "paper"){
      compScore++
      return "you lost! paper covers rock.";
     }
     else if (playerSelection === "rock" && computerSelection === "scissors"){
      playerScore++
      return "you won! rock crushes scissors.";
     }
     else if (playerSelection === "paper" && computerSelection === "scissors"){
      compScore++
      return "you lost! scissors cuts paper.";
     }
     else if (playerSelection == "paper" && computerSelection == "rock"){
      playerScore++
      return "you won! paper covers rock.";
     }
  
 }

 

//the game

const game = () => {
   for (let i= 0; i<5; i++){
   const playerSelection =  prompt("Throw your move" , "Rock Paper scissors")
   console.log(`ROUND: ${i+1}`)
   console.log(`Player threw ${playerSelection}`)
   const computerSelection = computerplay()
   console.log(playRound(playerSelection, computerSelection))
   console.log(`YOUR SCORE : ${playerScore}, COMPUTER SCORE : ${compScore}`)
   console.log("--------------------------------------")
   }


if (playerScore > compScore){
   return 'You won! , Impressive ';
}
else if (playerScore < compScore){
   return 'You lost! practice your throws!';
}
else {
   return "It's a Tie , not bad."
}
}

console.log(game())





   
