document.addEventListener("DOMContentLoaded", function () {
    // Login Form Handling
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                document.getElementById("loginError").innerText = "Username and password are required.";
                return;
            }

            alert("Login successful!");
            showPage("dashboardPage");
        });
    }

    // Transaction Form Handling
    const transactionForm = document.querySelector(".ActTrxform-container");

    if (transactionForm) {
        document.querySelector(".ActTrxsave-btn").addEventListener("click", function () {
            const amount = document.querySelector("input[type='text'][placeholder='Amount']")?.value.trim();
            if (!amount || isNaN(amount) || amount <= 0) {
                alert("Please enter a valid amount.");
                return;
            }

            alert("Transaction saved successfully!");
            transactionForm.reset();
        });

        document.querySelector(".ActTrxcancel-btn").addEventListener("click", function () {
            if (confirm("Are you sure you want to cancel?")) {
                transactionForm.reset();
            }
        });
    }

    // Handle Button Clicks
    // function handleButtonClick(selector, message) {
    //     const button = document.querySelector(selector);
    //     if (button) {
    //         button.addEventListener("click", function () {
    //             alert(message);
    //         });
    //     }
    // }

    // handleButtonClick(".ActTrxside-buttons button:nth-child(1)", "Viewing transaction details.");
    // handleButtonClick(".ActTrxside-buttons button:nth-child(2)", "Adding a new transaction.");
    // handleButtonClick(".ActTrxside-buttons button:nth-child(3)", "Editing transaction.");
    // handleButtonClick(".ActTrxside-buttons button:nth-child(4)", "Transaction deleted.");

    // Function to Show Different Pages
    function showPage(pageId) {
        document.querySelectorAll(".page").forEach(page => {
            page.style.display = "none";
        });

        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.style.display = "block";
        }
    }

    // Page Navigation from Login
    document.querySelector("button[onclick='showPage(\"dashboardPage\")']").addEventListener("click", function () {
        showPage("dashboardPage");
    });
});
