<?php
session_start();
require_once '../config.php';

if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    echo json_encode(['error' => 'Admin only']);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);
$message_id = $data['message_id'];

$result = mysqli_query($conn, "DELETE FROM chat_messages WHERE id=$message_id");

if ($result) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Error: ' . mysqli_error($conn)]);
}
?>

