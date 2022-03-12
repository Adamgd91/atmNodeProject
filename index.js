let { getCashAmount } = require("./wallet");
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

function app(message) {
  let searchType = prompt(
    "Choose which option you'd like: Balance, Deposit, Withdraw, Wallet Exit: "
  ).toLowerCase();

  switch (searchType) {
    case "balance":
      checkingForBalance();
      break;
    case "deposit":
      depositMoney();
      break;
    case "withdraw":
      withdrawMoney();
      break;
    case "wallet":
      console.log(getCashAmount());
      break;
    case "exit":
      process.exit(0);
      break;
    default:
      app(message); // restart app
      break;
  }
  app(message);
}
app();

function checkingForBalance() {
  let userPromptBalance = prompt("Do you want to know your Balance? Yes/No: ");
  if (userPromptBalance === userPromptBalance.toLowerCase("yes")) {
    getBalance();
  }
}

function depositMoney() {
  let userPromptDeposit = parseInt(prompt("How much do you want to deposit? "));

  deposit(userPromptDeposit);
}

function withdrawMoney() {
  let userPromptDeposit = parseInt(
    prompt("How much do you want to withdraw? ")
  );

  withdraw(userPromptDeposit);
}
