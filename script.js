let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Round is draw");
    msg.innerText = "Round is draw!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win the round!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose the round!");
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}.`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playGame = (userChoice) => {
      console.log("user chose = ", userChoice);
      
      const compChoice = genCompChoice();
      console.log("computer chose = ", compChoice);

      if(userChoice === compChoice){
          drawGame();
      }else {
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            userWin = compChoice === "Scissor" ? false :true;
        }else{
            userWin = compChoice === "Rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
      }
}

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
 });
 });









