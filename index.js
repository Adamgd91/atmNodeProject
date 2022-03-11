const { getBalance, withdraw, deposit, validatePin } = require("./atm");
const prompt = require("prompt-sync")();

function checkingForWrongPin(message) {
  let userPromptPin = parseInt(prompt(message));
  if (!validatePin(userPromptPin)) {
    checkingForWrongPin("Enter pin again: ");
  }
  return;
}

checkingForWrongPin("Enter pin: ");
