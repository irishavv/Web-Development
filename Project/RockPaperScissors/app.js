let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genComputerChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    const Idx = Math.floor(Math.random() * 3);
    return options[Idx];
};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw.";
    msg.style.backgroundColor = "#626C66"
};

const showWinner = (userWin, userChoice,computerChoice) => {
    if(userWin) {
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#E1CA96"
    }else {
        console.log("You lose");
        msg.innerText = `You Lose.  ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    const computerChoice = genComputerChoice();
    console.log("computer Choice", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = computerChoice === "Scissor";
        } else if (userChoice === "Paper") {
            userWin = computerChoice === "Rock";
        } else {
            userWin = computerChoice === "Paper";
        }

        showWinner(userWin, userChoice, computerChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});