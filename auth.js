function saveUserToCSV(userData) {
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
    
    const blob = new Blob([userRow + '\n'], { type: 'text/csv' });
    
    const link = document.createElement('a');
    
    if (!localStorage.getItem('csv_header_created')) {
        const headerRow = 'username,password,fullname,email,phone,dob,grade,institution\n';
        const headerBlob = new Blob([headerRow], { type: 'text/csv' });
        const headerLink = document.createElement('a');
        headerLink.href = URL.createObjectURL(headerBlob);
        headerLink.download = 'users.csv';
        headerLink.click();
        
        localStorage.setItem('csv_header_created', 'true');
    }
    
    link.href = URL.createObjectURL(blob);
    link.download = 'users_append.csv';
    link.click();
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    return true;
}

function validateUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
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
        console.log('Login successful for user:', username);
        
        const urlParams = new URLSearchParams(window.location.search);
        const redirect = urlParams.get('redirect');
        
        sessionStorage.setItem('currentUser', username);
        
        if (redirect) {
            window.location.href = redirect;
        } else {
            window.location.href = 'index.html';
        }
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function handleSignup(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.username === userData.username)) {
        alert('Username already exists. Please choose a different username.');
        return;
    }
    
    if (userData['profile-photo']) {
        userData.hasProfilePhoto = true;
        delete userData['profile-photo']; 
    }
    
    console.log('Signup attempted:', userData);
    
    if (saveUserToCSV(userData)) {
        alert('Account created successfully! You can now login.');
        window.location.href = 'login.html';
    } else {
        alert('Error creating account. Please try again.');
    }
}

function redirectToLogin(destination) {
    const currentUser = sessionStorage.getItem('currentUser');
    
    if (currentUser) {
        window.location.href = destination;
    } else {
        window.location.href = `login.html?redirect=${destination}`;
    }
}

function handleLogout() {
    sessionStorage.removeItem('currentUser');
    
    window.location.href = 'index.html';
    
    return false; 
}

function checkLoginStatus() {
    const currentUser = sessionStorage.getItem('currentUser');
    const loginButtonContainer = document.querySelector('.header-right');
    
    if (!loginButtonContainer) return; 
    
    if (currentUser) {
        loginButtonContainer.innerHTML = `
            <a href="profile.html" style="text-decoration: none;" title="View Profile">
                <img src="assets/user.png" alt="Profile" width="50" height="50" style="cursor: pointer; transition: transform 0.3s ease;">
            </a>
        `;
        
        const profileIcon = loginButtonContainer.querySelector('img');
        if (profileIcon) {
            profileIcon.onmouseover = function() { this.style.transform = 'scale(1.1)'; };
            profileIcon.onmouseout = function() { this.style.transform = 'scale(1)'; };
        }
    } else {
        loginButtonContainer.innerHTML = `
            <a href="login.html" style="text-decoration: none; color: inherit;">
                <div class="button-class" style="width: 110px; height: 40px; background-color: rgb(144, 144, 205); font-family: Lilita-One; font-size: 24px;">Login</div>
            </a>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});