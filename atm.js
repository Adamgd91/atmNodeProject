const { balance, pin } = require("./account.js");

function getBalance() {
  console.log(`Your Balance is ${balance}`);
  return balance;
}

function withdraw() {
  console.log(`Your withdrew is`);
}

function deposit() {
  console.log(`Your Deposit is`);
}

function validatePin() {
  console.log(`Your Pin is`);
}

module.exports = {
  getBalance,
  withdraw,
  deposit,
  validatePin,
};
