let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game is draw");
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You win the round!");
    }else{
        console.log("You lose the round!");
    }
}

const playGame = (userChoice) => {
      console.log("users chose = ", userChoice);
      
      const compChoice = genCompChoice();
      console.log("computer chose = ", compChoice);

      if(userChoice === compChoice){
          drawGame();
      }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false :true;
        }else{
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin);
      }
}

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
 });
 });









