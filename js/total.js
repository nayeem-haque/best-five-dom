document.getElementById("btn-total").addEventListener("click", function () {
  const managerAmount = getInputFieldValueById("manager");
  const coachAmount = getInputFieldValueById("coach");
  const budgetTotalElement = document.getElementById("total");
  const Total = managerAmount + coachAmount + currentBudgetTotal;
  budgetTotalElement.innerText = Total;
});
