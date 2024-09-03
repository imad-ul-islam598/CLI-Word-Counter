#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n\t---- Welcome To Our Mini Words Counter ----\n\t");

const answers: {
    Sentence: string
} = await inquirer.prompt([
        {
            name:"Sentence",
            type:"input",
            message: "Enter Your Sentence To Count The Words :"
        }
    ]);

const words = answers.Sentence.trim().split(" ");
console.log(words);

console.log(`\n\tYour Sentence Words Count Is ${words.length}`);


console.log("\n\t---- Thanks For Testing Our Project ----\t\n");