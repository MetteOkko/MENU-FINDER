<?php
session_start();
require_once '../config.php';

if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    echo json_encode(['error' => 'Admin only']);
    exit();
}

$result = mysqli_query($conn, "
SELECT 
    u.id,
    u.username,
    u.email,
    u.role,
    u.joinDate,
    COUNT(ulm.id) AS likedMenusCount
FROM users u
LEFT JOIN user_liked_menus ulm
ON ulm.user_id = u.id
GROUP BY u.id
");

$users = array();

while ($row = mysqli_fetch_assoc($result)) {
    $users[] = $row;
}

echo json_encode(['success' => true, 'users' => $users]);
?>

