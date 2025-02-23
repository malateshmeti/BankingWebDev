// Authentication logic
const correctUsername = 'admin';
const correctPassword = 'admin123';

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const loginError = document.getElementById('loginError');

    if (username === correctUsername && password === correctPassword) {
        showDashboard();
    } else {
        loginError.textContent = 'Incorrect username or password.';
        loginError.style.color = 'red';
    }
});

// Show dashboard and hide login page
function showDashboard() {
    window.location.href = 'DashBoardPage.html';
}

// Logout and return to login page
function logout() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('dashboardPage').style.display = 'none';
}

// Navigate to different modules
function openModule(moduleName) {
    switch (moduleName) {
        case 'Client Maintenance':
            window.location.href = 'ClientMaintenance.html';
            break;
        case 'Loan Management':
            window.location.href = 'LoanManagement.html';
            break;
        case 'Transactions':
            window.location.href = 'AccountTransaction.html';
            break;
        case 'Loan Repayment':
            window.location.href = 'LoanRepayment.html';
            break;
        case 'Account Management':
        case 'Reports':
        case 'Customer Support':
        case 'Settings':
            alert(moduleName + ' is under construction.');
            break;
        default:
            alert('Module not recognized.');
            break;
    }
}

