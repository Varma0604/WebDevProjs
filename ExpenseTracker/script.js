let expenses = [];
let chart;

function addExpense() {
    const nameInput = document.getElementById('expense-name');
    const amountInput = document.getElementById('expense-amount');
    
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    
    if (name === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
    }
    
    const expense = { name, amount };
    expenses.push(expense);
    
    nameInput.value = '';
    amountInput.value = '';
    
    updateExpenseList();
    updateTotalAmount();
    updateChart();
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';
    
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            expenses.splice(index, 1);
            updateExpenseList();
            updateTotalAmount();
            updateChart();
        };
        li.appendChild(deleteButton);
        
        expenseList.appendChild(li);
    });
}

function updateTotalAmount() {
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

function updateChart() {
    const categories = [...new Set(expenses.map(expense => expense.name))];
    const categoryTotals = categories.map(category => {
        return expenses
            .filter(expense => expense.name === category)
            .reduce((sum, expense) => sum + expense.amount, 0);
    });

    const ctx = document.getElementById('expense-chart').getContext('2d');

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: categoryTotals,
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
