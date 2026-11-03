
// ========================================
// STORYSPACE - AUTHENTICATION
// ========================================

// ========================================
// REGISTER FUNCTIONALITY
// ========================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim().toLowerCase();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const message = document.getElementById("registerMessage");

        // Check password length
        if (password.length < 6) {

            message.textContent = "Password must contain at least 6 characters.";
            message.style.color = "red";

            return;
        }

        // Check password confirmation
        if (password !== confirmPassword) {

            message.textContent = "Passwords do not match.";
            message.style.color = "red";

            return;
        }

        // Get existing users
        const users = JSON.parse(
            localStorage.getItem("storyspaceUsers")
        ) || [];

        // Check existing email
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {

            message.textContent = "This email is already registered.";
            message.style.color = "red";

            return;
        }

        // Create new user
        const newUser = {
            name: name,
            email: email,
            password: password
        };

        // Save user
        users.push(newUser);

        localStorage.setItem(
            "storyspaceUsers",
            JSON.stringify(users)
        );

        // Success message
        message.textContent = "Account created successfully! You can now login.";
        message.style.color = "green";

        // Reset form
        registerForm.reset();

    });

}


// ========================================
// PASSWORD VISIBILITY
// ========================================

const passwordToggles = document.querySelectorAll(".password-toggle");

passwordToggles.forEach(button => {

    button.addEventListener("click", function () {

        const targetId = this.dataset.target;
        const passwordInput = document.getElementById(targetId);
        const icon = this.querySelector("i");

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");

        } else {

            passwordInput.type = "password";

            icon.classList.remove("bi-eye-slash");
            icon.classList.add("bi-eye");

        }

    });

});

// ========================================
// LOGIN FUNCTIONALITY
// ========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get login form values
        const email = document.getElementById("loginEmail")
            .value.trim().toLowerCase();

        const password = document.getElementById("loginPassword").value;

        const message = document.getElementById("loginMessage");

        // Get registered users
        const users = JSON.parse(
            localStorage.getItem("storyspaceUsers")
        ) || [];

        // Find matching user
        const user = users.find(
            user => user.email === email && user.password === password
        );

        // Check login credentials
        if (!user) {

            message.textContent = "Invalid email or password.";
            message.style.color = "red";

            return;
        }

        // Save login session
        const loggedInUser = {
            name: user.name,
            email: user.email
        };

        sessionStorage.setItem(
            "storyspaceCurrentUser",
            JSON.stringify(loggedInUser)
        );

        // Remember me option
        if (document.getElementById("rememberMe").checked) {

            localStorage.setItem(
                "storyspaceRememberedUser",
                JSON.stringify(loggedInUser)
            );

        } else {

            localStorage.removeItem("storyspaceRememberedUser");

        }

        // Success message
        message.textContent = "Login successful! Welcome, " + user.name + ".";
        message.style.color = "green";

        // Redirect to homepage
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1000);

    });

}

// ========================================
// DYNAMIC NAVIGATION
// ========================================

// Get navigation elements
const loginNav = document.getElementById("loginNav");
const registerNav = document.getElementById("registerNav");
const userNav = document.getElementById("userNav");
const logoutNav = document.getElementById("logoutNav");

const navUsername = document.getElementById("navUsername");
const logoutButton = document.getElementById("logoutButton");


// Check current login session
function getCurrentUser() {

    const sessionUser = sessionStorage.getItem("storyspaceCurrentUser");

    const rememberedUser = localStorage.getItem("storyspaceRememberedUser");

    return sessionUser
        ? JSON.parse(sessionUser)
        : JSON.parse(rememberedUser || "null");

}


// Update navigation
function updateNavigation() {

    const currentUser = getCurrentUser();

    if (currentUser) {

        if (loginNav) loginNav.classList.add("d-none");
        if (registerNav) registerNav.classList.add("d-none");

        if (userNav) userNav.classList.remove("d-none");
        if (logoutNav) logoutNav.classList.remove("d-none");

        if (navUsername) {
            navUsername.textContent = currentUser.name;
        }

    } else {

        if (loginNav) loginNav.classList.remove("d-none");
        if (registerNav) registerNav.classList.remove("d-none");

        if (userNav) userNav.classList.add("d-none");
        if (logoutNav) logoutNav.classList.add("d-none");

    }

}


// Logout functionality
if (logoutButton) {

    logoutButton.addEventListener("click", () => {

        sessionStorage.removeItem("storyspaceCurrentUser");

        localStorage.removeItem("storyspaceRememberedUser");

        window.location.href = "index.html";

    });

}


// Run navigation update
updateNavigation();
