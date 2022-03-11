const { getBalance, withdraw, deposit, validatePin } = require("./atm");
const prompt = require("prompt-sync")();

console.log("Hello World");
const userPromptPin = prompt("Enter pin: ");

if (validatePin) console.log(userPrompt);
getBalance();
