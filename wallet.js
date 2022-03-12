let cash = 500;

function getCashAmount() {
  return cash;
}

function subtractCash(amount) {
  cash -= amount;
}

function addCash(amount) {
  cash += amount;
}

module.exports = {
  getCashAmount,
  addCash,
  subtractCash,
};
