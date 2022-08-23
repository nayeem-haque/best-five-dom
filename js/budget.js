let currentBudgetTotal = 0;
document.getElementById("btn-calculate").addEventListener("click", function () {
  const newBudgetAmount = getInputFieldValueById("budget");
  const budgetTotalElement = document.getElementById("expenses");
  if (cnt > 5) {
    currentBudgetTotal = 5 * parseFloat(newBudgetAmount);
  } else {
    currentBudgetTotal = cnt * parseFloat(newBudgetAmount);
  }
  budgetTotalElement.innerText = currentBudgetTotal;
});
