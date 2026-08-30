<?php
$host = 'localhost';
$db_name = 'extmette';
$username = 'mette';
$password = '17022006';

$conn = mysqli_connect($host, $username, $password, $db_name);

if (!$conn) {
    die(json_encode(['error' => 'Connection failed: ' . mysqli_connect_error()]));
}

mysqli_set_charset($conn, "utf8");
?>
