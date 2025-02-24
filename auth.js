function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Add your login validation logic here
    console.log('Login attempted:', username);
    
    // Redirect to index page after successful login
    window.location.href = 'index.html';
}

function handleSignup(event) {
    event.preventDefault();
    
    // Get all form data
    const formData = new FormData(event.target);
    
    // Add your signup validation logic here
    console.log('Signup attempted:', Object.fromEntries(formData));
    
    // Redirect to index page after successful signup
    window.location.href = 'index.html';
}