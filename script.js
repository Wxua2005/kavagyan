function showLoginForm() {
    const form = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background-color: white; padding: 20px; border-radius: 10px; 
                    box-shadow: 0 0 10px rgba(0,0,0,0.5); z-index: 1000;">
            <h2 style="font-family: Habibi;">Login Required</h2>
            <form id="loginForm">
                <div style="margin: 10px 0;">
                    <label style="font-family: Habibi;">Login ID:</label><br>
                    <input type="text" id="loginId" required>
                </div>
                <div style="margin: 10px 0;">
                    <label style="font-family: Habibi;">Password:</label><br>
                    <input type="password" id="password" required>
                </div>
                <button type="submit" style="background-color: lightcoral; padding: 5px 10px; 
                        border-radius: 5px; border: none; cursor: pointer; font-family: Habibi;">Submit</button>
                <button type="button" onclick="closeForm()" style="margin-left: 10px; padding: 5px 10px; 
                        border-radius: 5px; border: none; cursor: pointer; font-family: Habibi;">Cancel</button>
            </form>
        </div>
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background-color: rgba(0,0,0,0.5); z-index: 999;"></div>
    `;
    document.body.insertAdjacentHTML('beforeend', form);

    // Add event listener for form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your login logic here
        const loginId = document.getElementById('loginId').value;
        const password = document.getElementById('password').value;
        console.log('Login attempted with:', loginId, password);
        closeForm();
    });
}

function closeForm() {
    // Remove the login form and overlay
    const form = document.querySelector('[style*="z-index: 1000"]');
    const overlay = document.querySelector('[style*="z-index: 999"]');
    if (form) form.remove();
    if (overlay) overlay.remove();
}

function showFeedbackForm() {
    const form = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background-color: white; padding: 30px; border-radius: 15px; 
                    box-shadow: 0 0 10px rgba(0,0,0,0.5); z-index: 1000;">
            <h2 style="font-family: 'Lilita One'; font-size: 28px;">Feedback Form</h2>
            <form id="feedbackForm">
                <div style="margin: 15px 0;">
                    <label style="font-family: Habibi; font-size: 18px;">Email:</label><br>
                    <input type="email" id="email" required style="width: 400px; height: 30px; 
                           margin-top: 5px; border-radius: 5px; padding: 5px;">
                </div>
                <div style="margin: 15px 0;">
                    <label style="font-family: Habibi; font-size: 18px;">Your Feedback:</label><br>
                    <textarea id="feedback" required style="width: 400px; height: 200px; resize: none; 
                             margin-top: 5px; border-radius: 5px; padding: 10px;"></textarea>
                </div>
                <button type="submit" style="background-color: lightcoral; padding: 8px 20px; 
                        border-radius: 10px; border: 3px solid black; cursor: pointer; 
                        font-family: Habibi; font-size: 16px; font-weight: bold;">Submit</button>
                <button type="button" onclick="closeForm()" style="margin-left: 15px; padding: 8px 20px; 
                        border-radius: 10px; border: 3px solid black; cursor: pointer; 
                        font-family: Habibi; font-size: 16px; background-color: white; font-weight: bold;">Cancel</button>
            </form>
        </div>
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background-color: rgba(0,0,0,0.5); z-index: 999;"></div>
    `;
    document.body.insertAdjacentHTML('beforeend', form);

    // Add event listener for form submission
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('feedback').value;
        console.log('Feedback submitted:', { email, feedback });
        alert('Thank you for your feedback!');
        closeForm();
    });
}