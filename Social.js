const budgetForm = document.querySelector('#budget-form');
const totalIncome = document.querySelector('#total-income');
const totalExpenses = document.querySelector('#total-expenses');
const netIncome = document.querySelector('#net-income');

let income = 0;
let expenses = 0;

budgetForm.addEventListener('submit', (event) => {
	event.preventDefault();

	// Get input values
	const incomeInput = document.querySelector('#income');
	const expensesInput = document.querySelector('#expenses');
	const incomeValue = parseInt(incomeInput.value);
	const expensesValue = parseInt(expensesInput.value);

	// Update totals
	income += incomeValue;
	expenses += expensesValue;
	totalIncome.innerText = income;
	totalExpenses.innerText = expenses;
	netIncome.innerText = income - expenses;

	// Clear input fields
	incomeInput.value = '';
	expensesInput.value = '';
});
