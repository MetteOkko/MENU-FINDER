<?php
session_start();
require_once '../config.php';

$result = mysqli_query($conn, "SELECT id, username, content, timestamp FROM chat_messages ORDER BY timestamp ASC");
$messages = array();

while ($row = mysqli_fetch_assoc($result)) {
    $messages[] = $row;
}

echo json_encode(['success' => true, 'messages' => $messages]);
?>

