#! /usr/bin/env node
import inquirer from "inquirer"
const randnum = Math.floor(Math.random() * 10 + 2);
console.log(randnum);

const answers = await inquirer.prompt([
    {
        message :" plz guess the number between 1 and 10 ",
        type :"number",
        name :"usernumber" }
])
if (answers.usernumber===randnum) {
    console.log("you guessed correct");
    
    
} else {
console.log("invalid number");
    }

