<?php
session_start();
require_once '../config.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);
$content = $data['content'];
$user_id = $_SESSION['user_id'];
$username = $_SESSION['username'];

// Insert message
$sql = "INSERT INTO chat_messages (user_id, username, content) VALUES ($user_id, '$username', '$content')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(['success' => true, 'message' => 'Message sent']);
} else {
    echo json_encode(['error' => 'Error: ' . mysqli_error($conn)]);
}
?>

