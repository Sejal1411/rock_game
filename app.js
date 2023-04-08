let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function wholeWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${wholeWord(userChoice)}(user) beats ${wholeWord(computerChoice)}(comp). You win! 🎉🎉`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 2000)

}


function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${wholeWord(userChoice)}(user) loses to ${wholeWord(computerChoice)}(comp). You lost! 🥴🥴`;
    document.getElementById(userChoice).classList.add('red-glow');
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 2000)
}

function draw(userChoice, computerChoice) {
  
    result_p.innerHTML = `${wholeWord(userChoice)}(user) equals ${wholeWord(computerChoice)}(comp). Its a draw 😂😂`;
    document.getElementById(userChoice).classList.add('grey-glow');
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 2000)
}


function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
    case "rp": 
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp": 
    case "ss":
       draw(userChoice, computerChoice);
       break;
   }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    scissor_div.addEventListener('click', function() {
        game("p"); 
    })
    
    paper_div.addEventListener('click', function() {
        game("s");
    })
}

main();


