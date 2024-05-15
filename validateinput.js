/*Question Two
 
Write a JavaScript function that takes a comma-separated numbers as input and returns the sum of those numbers. The function should validate the input:
 
If any non-numeric characters are present (except commas), treat those values as zero.

If the input string is empty, return zero. */


//importing readline to creates a user input field on the terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function validateInputandSum(input) {
    if (!input || input.trim() === "") {
        return 0; 
    }

    return input.split(",").reduce((sum, num) => {
        let parsedNum = parseFloat(num.trim());
        return isNaN(parsedNum) ? sum : sum + parsedNum;
    }, 0);
}

rl.question("Enter numbers separated by commas: ", (input) => {
    let totalsum = validateInputandSum(input);
    console.log(totalsum );
    rl.close();
});
