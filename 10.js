let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genCompuetrChoice = () => {
    const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
};

const drawGame = () => {
    // console.log("Game was Draw.");
       msg.innerText = "Game was Draw.Play Again";
       msg.style.backgroundColor = "#081b31"

};

const showWinner = (userWin, userChoice, CompuetrChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${CompuetrChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        // console.log("You Lose");
           msg.innerText = `You Lose! ${CompuetrChoice} beats your ${userChoice}`;
           msg.style.backgroundColor = "red";
    };

};



const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    const CompuetrChoice = genCompuetrChoice();
    console.log("computer choice = ", CompuetrChoice);

    if(userChoice === CompuetrChoice) {
        //Draw Game
        drawGame();
 }

 else {
    let userWin = true;
    if(userChoice === "rock") {
      userWin =  CompuetrChoice === "paper" ? false : true;
    }

    else if (userChoice === "paper"){
       userWin = CompuetrChoice === "scissors" ? false : true;
    }
    else {
        userWin = CompuetrChoice === "rock" ? false : true;
    };
    showWinner(userWin, userChoice, CompuetrChoice);

 }

};



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choiced was clicked", choiceId);
        playGame(userChoice);
    });
});
