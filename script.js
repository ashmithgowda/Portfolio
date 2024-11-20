
function displayGreeting() {
    const greetingElement = document.getElementById("greeting");
    const now = new Date();
    const hour = now.getHours();

    let greetingMessage = "Hello!";
    if (hour < 12) {
        greetingMessage = "Good Morning!";
    } else if (hour < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    greetingElement.innerText = greetingMessage;
}

// Calculate Age Dynamically
function calculateAge() {
    const birthDate = new Date("2004-01-01"); // Replace with your birthdate
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    document.getElementById("age").innerText = age;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");

    const themeButton = document.getElementById("theme-button");
    if (body.classList.contains("dark-theme")) {
        themeButton.innerText = "Switch to Light Theme";
    } else {
        themeButton.innerText = "Switch to Dark Theme";
    }
}

function showResumeAlert() {
    alert("Welcome to my Resume page!");
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("greeting")) displayGreeting();
    if (document.getElementById("age")) calculateAge();
});
