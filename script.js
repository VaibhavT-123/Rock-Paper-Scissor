let userScore = 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
    // we can't gen random string so gen rand no 0,1,2 and and take values from option
    let options = ["rock","paper","scissors"];
    let randInt = Math.floor(Math.random() * 3);
    return options[randInt];

    // if u wanna generate rand no utp 9 multiply it by 10
}


const draw = () => {
   msg.innerText = "Game Was Draw";
   msg.style.backgroundColor = "black";
   console.log("Draw...!")
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore; 
       console.log("You Wins...!");
       msg.innerText = `You Wins...! ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose...!");
       msg.innerText = `You Lose...! ${compChoice} beats ${userChoice}`;
       msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    console.log("userChoice: ", userChoice);
    // ganerate computer choice;
    let compChoice = genCompChoice();
    console.log("computerChoice: ", compChoice);

    if(userChoice === compChoice){
       draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper,scissor
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock , scissor
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});   