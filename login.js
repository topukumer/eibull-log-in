// login.js

// Predefined correct email and password
const correctEmail = "user@example.com";
const correctPassword = "password123";

// Get the form element
const form = document.querySelector('.registration-form');

// Add an event listener to the form submit event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the entered email and password match the correct ones
    if (email === correctEmail && password === correctPassword) {
        // Show a popup alert for successful login
        alert('Login approved. Welcome!');
        
        // Optionally, redirect to another page after login success
        // window.location.href = "dashboard.html";
    } else {
        // Show an alert for invalid login credentials
        alert('Invalid login. Please check your email and password.');
    }
});
