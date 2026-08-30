<?php
// Later we will add session start and database connection here
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>MENU FINDER</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>

</head>
<body>
    <div class="parent">

    <header class="header">

    <nav class="menu">
            <a href="index.html">Home</a>
            <a href="recipes.html">Menus</a>
            <a href="chat.php">Chat</a>
            <a href="signin.php">Sign in</a>
        </nav>

        <h1 class="title">MENU FINDER</h1>

        <div class="kellotaulu" id="txt"> </div>
        
        
    </header>

    <aside class="sidebar">
        <!-- User Profile Section -->
        <div class="user-section">
            <!-- Logged Out Section -->
            <div class="user-logged-out" id="userLoggedOut">
                <h3>User Account</h3>
                <p>Log in or register to see your user data, liked menus, and more!</p>
            </div>

            <!-- Logged In Section -->
            <div class="user-logged-in" id="userLoggedIn" style="display: none;">
                <div class="profile-info">
                    <h3 id="username">User Name</h3>
                    <p class="join-date">Joined <span id="joinDate">Feb 10, 2026</span></p>
                </div>
                <a href="admin.php" id="adminPanelLink" class="admin-panel-link" style="display: none;">Admin Panel</a>
                <button class="logout-btn" onclick="logoutUser()">Logout</button>
                <div class="liked-menus-section">
                    <h4>Liked Menus</h4>
                    <div id="likedMenusList" class="liked-menus-list">
                        <!-- Liked menus will appear here -->
                    </div>
                </div>
            </div>
        </div>
    </aside>

    <main class="main">
        <div class="signin-container">
            <div class="form-box active" id="login-form">
                <form id="loginFormElement" onsubmit="handleLoginSubmit(event)">
                    <h2>Login</h2>
                    <input type="text" id="loginUsername" placeholder="Username" required>
                    <input type="password" id="loginPassword" placeholder="Password" required>
                    <button type="submit" name="login">Login</button>
                    <p>Don't have an account? <a href="#" onclick="showForm('register-form'); return false;">Register here</a></p>
            </form> 
        </div>

        <div class="form-box" id="register-form">
                <form id="registerFormElement" onsubmit="handleRegisterSubmit(event)">
                    <h2>Register</h2>
                    <input type="text" id="registerUsername" placeholder="Username" required>
                    <input type="email" id="registerEmail" placeholder="Email" required>
                    <input type="password" id="registerPassword" placeholder="Password" required>
                    <select id="registerRole" name="role" required onchange="toggleAdminCode()">
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input type="password" id="adminCode" placeholder="Admin Code (Required for Admin)" style="display: none;" />
                    <button type="submit" name="register">Register</button>
                    <p>Already have an account? <a href="#" onclick="showForm('login-form'); return false;">Login here</a></p>
            </form> 
        </div>
    </div>
</main>

    <footer class="footer">Made by @Mette Okkonen</footer>

    </div>
</body>

</html>