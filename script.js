// Dummy login credentials
const validUsername = "user";
const validPassword = "password";

// Select elements
const loginContainer = document.getElementById('login');
const todoContainer = document.getElementById('todoApp');
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const todoForm = document.getElementById('todoForm');
const taskList = document.getElementById('taskList');
const logoutButton = document.getElementById('logoutButton');

// Login form event listener
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        errorMessage.textContent = '';
        loginContainer.style.display = 'none';
        todoContainer.style.display = 'block';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

// Add new task
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = document.getElementById('newTask').value;

    if (newTask.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = newTask;
        taskList.appendChild(li);
        document.getElementById('newTask').value = '';
    }
});

// Logout functionality
logoutButton.addEventListener('click', function() {
    loginContainer.style.display = 'block';
    todoContainer.style.display = 'none';
    taskList.innerHTML = '';
});
