<?php
session_start();

// Destroy session
session_destroy();

// Clear any session cookies
if (isset($_COOKIE[session_name()])) {
    setcookie(session_name(), '', time() - 3600, '/');
}

echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
?>
