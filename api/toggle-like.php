<?php
session_start();
require_once '../config.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);
$menu_name = $data['menu_name'];
$user_id = $_SESSION['user_id'];

// Check if already liked
$check = mysqli_query($conn, "SELECT * FROM user_liked_menus WHERE user_id=$user_id AND menu_name='$menu_name'");

if (mysqli_num_rows($check) > 0) {
    // Remove like
    mysqli_query($conn, "DELETE FROM user_liked_menus WHERE user_id=$user_id AND menu_name='$menu_name'");
    $action = 'removed';
} else {
    // Add like
    mysqli_query($conn, "INSERT INTO user_liked_menus (user_id, menu_name) VALUES ($user_id, '$menu_name')");
    $action = 'added';
}

echo json_encode(['success' => true, 'action' => $action]);
?>

