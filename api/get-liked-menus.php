<?php
session_start();
require_once '../config.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['liked_menus' => []]);
    exit();
}

$user_id = $_SESSION['user_id'];
$result = mysqli_query($conn, "SELECT menu_name FROM user_liked_menus WHERE user_id=$user_id");
$liked = array();

while ($row = mysqli_fetch_assoc($result)) {
    $liked[] = $row['menu_name'];
}

echo json_encode(['liked_menus' => $liked]);
?>
