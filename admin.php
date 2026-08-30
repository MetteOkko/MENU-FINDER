<?php

session_start();

// Check if user is logged in and is admin
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    // redirect to home if not admin
    header('Location: index.html');
    exit();
}

// Now admin can see the page

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Admin Panel - MENU FINDER</title>
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

            <div class="kellotaulu" id="txt"></div>
        </header>

        <aside class="sidebar">
            <!-- User Profile Section -->
            <div class="user-section">
                <!-- Logged Out Section -->
                <div class="user-logged-out" id="userLoggedOut">
                    <h3>User Account</h3>
                    <p>Log in to access the admin panel.</p>
                </div>

                <!-- Logged In Section -->
                <div class="user-logged-in" id="userLoggedIn" style="display: none;">
                    <div class="profile-info">
                        <h3 id="username">User Name</h3>
                        <p class="join-date">Joined <span id="joinDate">Feb 10, 2026</span></p>
                    </div>
                    <button class="logout-btn" onclick="logoutUser()">Logout</button>
                </div>
            </div>
        </aside>

        <main class="main">
            <div class="admin-container">
                <h2>User Management Panel</h2>
                <p class="admin-subtitle">Manage all registered users in the system</p>
                
                <div id="adminUsersList" class="admin-users-list">
                    <!-- Users will be loaded here -->
                </div>
            </div>
        </main>

        <footer class="footer">Made by @Mette Okkonen</footer>

    </div>

    <script>
        // Load admin panel on page load
        window.addEventListener('DOMContentLoaded', function() {
            aloitaKello();
            checkUserLoginStatus();
            
            // Check if user is admin, if not redirect
            if (!isCurrentUserAdmin()) {
                alert('Access denied. Admin only.');
                window.location.href = 'index.html';
            }
            
            loadAdminPanel();
        });
    </script>
</body>

</html>
