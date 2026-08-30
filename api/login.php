<?php
session_start();
require_once '../config.php';

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$password = $data['password'];

// Get user from database
$result = mysqli_query($conn, "SELECT * FROM users WHERE username='$username'");

if (mysqli_num_rows($result) == 0) {
    echo json_encode(['error' => 'Invalid username or password']);
    exit();
}

$user = mysqli_fetch_assoc($result);

// Verify password
if (!password_verify($password, $user['password'])) {
    echo json_encode(['error' => 'Invalid username or password']);
    exit();
}

// Set session
$_SESSION['user_id'] = $user['id'];
$_SESSION['username'] = $user['username'];
$_SESSION['email'] = $user['email'];
$_SESSION['role'] = $user['role'];

echo json_encode(['success' => true, 'message' => 'Login successful']);
?>

