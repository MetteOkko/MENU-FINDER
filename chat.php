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
            </div>
        </div>

        <hr class="sidebar-divider">

        <!-- Chat Filters Section -->
        <div class="filters-section">
            <h3>Quick Filters</h3>
            <div class="filter-buttons">
                <button class="filter-btn active" onclick="filterMessages('all')">All Messages</button>
                <button class="filter-btn" onclick="filterMessages('today')">Today</button>
                <button class="filter-btn" onclick="filterMessages('week')">This Week</button>
                <button class="filter-btn" onclick="filterMessages('recent')">Most Recent</button>
            </div>
            
            <div class="chat-stats">
                <h4>Chat Statistics</h4>
                <p><strong>Total Messages:</strong> <span id="totalMessages">0</span></p>
                <p><strong>Active Users:</strong> <span id="activeUsers">0</span></p>
            </div>
        </div>
    </aside>

    <main class="main">
        <div class="chat-container">
            <div class="chat-header">
                <h2>Community Chat</h2>
                <p>Discuss menus and recipes with other food enthusiasts</p>
            </div>

            <div class="messages-container" id="messagesContainer">
                <!-- Messages will appear here -->
            </div>

            <div class="chat-input-area">
                <form id="chatForm" onsubmit="sendMessage(event)">
                    <div class="input-wrapper">
                        <textarea id="messageInput" placeholder="Share your thoughts about recipes and menus..." rows="3" required></textarea>
                        <button type="submit" class="send-btn">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </main>

    <footer class="footer">Made by @Mette Okkonen</footer>

    </div>
</body>

</html>