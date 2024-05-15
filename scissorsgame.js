/*  Question 1:
Objective: Create a two-player Rock Paper Scissors game in JavaScript, with one player being the user and the other being the computer.
 
Requirements:
 
Functionality:
 
User selects their choice (rock, paper, or scissors) through buttons or user input.
Computer randomly chooses its move (0-0.33 rock, 0.34-0.66 paper, 0.67-1 scissors).
Winner is determined based on standard rock paper scissors rules.
Display the result (win, lose, tie) and user/computer choices on the screen.
Consider adding scorekeeping and a winner declaration for multiple rounds (optional).
Code Structure:
 
Use at least one function declaration.
Use at least one function expression.
Use at least one arrow function.
Use at least one anonymous function.
Use a ternary operator for a concise outcome display 
Utilize default parameters in a function
 
Cheat Mode:
 
Design a "cheat mode" feature that alters the computer's choice in some way (optional).
Come up with one specific implementation of cheat mode (e.g., computer always chooses scissors).
 */


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//we use function declaration to declare a function where a comp chooses its move randomly.
function computerChoice() {
    const random = Math.random();
    if (random < 0.34) return "rock";
    if (random < 0.67) return "paper";
    return "scissors";
}

//to determine a winner we use function expresssion to write function determineWinner.
const determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) return "tie";
    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        return "win";
    }
    return "lose";
};

//utilizing arrow function to prompt user to input their choice
const playRound = () => {
    //creating an anonymous function userChoice
    rl.question('Enter rock, paper, or scissors: ', (userChoice) => {
        userChoice = userChoice.toLowerCase().trim();
        const compChoice = computerChoice();
        const result = determineWinner(userChoice, compChoice);

        console.log(`User choice: ${userChoice}`);
        console.log(`Computer choice: ${compChoice}`);
        console.log(`Result: ${result}`);
        //to display the result we use a ternary operator.
        console.log(result === "tie" ? "It's a tie!" : result === "win" ? "You win!" : "You lose!");

        let score = 0;
        playRound.score = (result === "win") ? ++score : score;

        rl.close();
    });
};

//to loop for multiple rounds.
rl.on('close', () => {
    console.log('Game over!');
    console.log(`Final score: ${playRound.score}`);
});

for (let i = 0; i < 3; i++) {
    playRound();
}
