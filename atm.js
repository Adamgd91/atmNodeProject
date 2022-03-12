let { balance, pin } = require("./account.js");
let { subtractCash, addCash } = require("./wallet");
// Account for ++++ deposit() and ---- withdraw()
function getBalance() {
  console.log(`Your Balance is ${balance}`);
}

// prompt user if they want to withdraw
function withdraw(amount) {
  console.log(`Your withdrew is ${amount}`);
  balance -= amount;
  addCash(amount);
}

// prompt user if they want to deposit
function deposit(amount) {
  console.log(`Your Deposit is ${amount}`);
  balance += amount;
  subtractCash(amount);
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
