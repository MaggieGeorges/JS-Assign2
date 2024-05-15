let score = 0;

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


function playRound(userChoice) {
    const compChoice = computerChoice();
    const result = determineWinner(userChoice, compChoice);

    document.getElementById("result").innerText = `User choice: ${userChoice}, Computer choice: ${compChoice}, Result: ${result}`;
    document.getElementById("score").innerText = `Score: ${result === "win" ? ++score : score}`;
}
