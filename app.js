#!/usr/bin/env node
import inquirer from "inquirer";
//Printing welcome message
console.log('\n\t\t***************  Welcome to "alihashmi2288" - "Simple Calculator"  ***************\n');
//Taking input from user
const Answer = await inquirer.prompt([
    {
        name: "First_Number",
        type: "number",
        message: "Enter First number?",
    },
    {
        name: "Second_Number",
        type: "number",
        message: "Enter Second number?",
    },
    {
        name: "Operator",
        type: "list",
        message: "Select one of the operator given below",
        choices: ["Addition (+)", "Subtraction (-)", "Multiplication (*)", "Division (/)", "Modulus (%)", "Power (**)"],
    },
]);
//Printing the result using if-else statement
if (Answer.Operator == "Addition (+)") {
    console.log(Answer.First_Number + Answer.Second_Number);
}
else if (Answer.Operator == "Subtraction (-)") {
    console.log(Answer.First_Number - Answer.Second_Number);
}
else if (Answer.Operator == "Multiplication (*)") {
    console.log(Answer.First_Number * Answer.Second_Number);
}
else if (Answer.Operator == "Division (/)") {
    console.log(Answer.First_Number / Answer.Second_Number);
}
else if (Answer.Operator == "Modulus (%)") {
    console.log(Answer.First_Number % Answer.Second_Number);
}
else if (Answer.Operator == "Power (**)") {
    console.log(Answer.First_Number ** Answer.Second_Number);
}
else {
    console.log("Invalid Input");
}
//Printing thank's message
console.log("\n\t ------------------------------------------ (THANK'S FOR USING) ----------------------------------------- \n");
