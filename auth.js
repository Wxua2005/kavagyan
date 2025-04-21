// User database functions
function saveUserToCSV(userData) {
    // Convert user data to CSV format
    const userRow = [
        userData.username, 
        userData.password,
        userData["full-name"],
        userData.email,
        userData.phone,
        userData.dob,
        userData.grade,
        userData.institution
    ].join(',');
    
    // Create a Blob containing the CSV data
    const blob = new Blob([userRow + '\n'], { type: 'text/csv' });
    
    // Create a download link for the CSV if users.csv doesn't exist
    const link = document.createElement('a');
    
    // Check if users.csv exists (we can't do this directly in client-side JS)
    // Instead, we'll use localStorage to track if we've created the header
    if (!localStorage.getItem('csv_header_created')) {
        // First time - create header row
        const headerRow = 'username,password,fullname,email,phone,dob,grade,institution\n';
        const headerBlob = new Blob([headerRow], { type: 'text/csv' });
        const headerLink = document.createElement('a');
        headerLink.href = URL.createObjectURL(headerBlob);
        headerLink.download = 'users.csv';
        headerLink.click();
        
        // Mark that we've created the header
        localStorage.setItem('csv_header_created', 'true');
    }
    
    // Now append the user data
    link.href = URL.createObjectURL(blob);
    link.download = 'users_append.csv';
    link.click();
    
    // In a real application, you would use server-side code to append to the CSV
    // This client-side approach is just for demonstration
    
    // Store user in localStorage as a temporary solution
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    return true;
}

function validateUser(username, password) {
    // In a real application, this would read from the CSV file on the server
    // For this demonstration, we'll use localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user exists and password matches
    const user = users.find(u => u.username === username);
    if (user && user.password === password) {
        return true;
    }
    return false;
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (validateUser(username, password)) {
        // Login successful
        console.log('Login successful for user:', username);
        
        // Handle redirect if present
        const urlParams = new URLSearchParams(window.location.search);
        const redirect = urlParams.get('redirect');
        
        // Store logged in user in session
        sessionStorage.setItem('currentUser', username);
        
        if (redirect) {
            window.location.href = redirect;
        } else {
            window.location.href = 'index.html';
        }
    } else {
        // Login failed
        alert('Invalid username or password. Please try again.');
    }
}

function handleSignup(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    
    // Check if username already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.username === userData.username)) {
        alert('Username already exists. Please choose a different username.');
        return;
    }
    
    // Handle profile photo (in a real app, this would upload to a server)
    // For simplicity, we'll just note that a photo was selected
    if (userData['profile-photo']) {
        userData.hasProfilePhoto = true;
        // In a real application, you would upload this file to your server
        // and store the file path in the CSV
        delete userData['profile-photo']; // Remove file object from userData before storing
    }
    
    console.log('Signup attempted:', userData);
    
    // Save user data to CSV
    if (saveUserToCSV(userData)) {
        alert('Account created successfully! You can now login.');
        window.location.href = 'login.html';
    } else {
        alert('Error creating account. Please try again.');
    }
}

function redirectToLogin(destination) {
    // Check if user is logged in
    const currentUser = sessionStorage.getItem('currentUser');
    
    if (currentUser) {
        // User is logged in, redirect directly to destination
        window.location.href = destination;
    } else {
        // User is not logged in, redirect to login page
        window.location.href = `login.html?redirect=${destination}`;
    }
}