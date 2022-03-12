let { balance, pin } = require("./account.js");

// Account for ++++ deposit() and ---- withdraw()
function getBalance() {
  console.log(`Your Balance is ${balance}`);
  return balance;
}

// prompt user if they want to withdraw
function withdraw() {
  console.log(`Your withdrew is ${}`);
  return balance;
}

// prompt user if they want to deposit
function deposit(amount) {
  console.log(`Your Deposit is ${amount}`);
  balance += amount;
  return balance;
}

function validatePin(userPromptPin) {
  if (pin !== userPromptPin) {
    return false;
  }
  return true;
}

module.exports = {
  getBalance,
  withdraw,
  deposit,
  validatePin,
};
