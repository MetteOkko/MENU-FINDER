<?php
session_start();

if (isset($_SESSION['user_id'])) {
    echo json_encode(['success' => true, 'user' => ['username' => $_SESSION['username'], 'email' => $_SESSION['email'], 'role' => $_SESSION['role']]]);
} else {
    echo json_encode(['success' => false]);
}
?>

