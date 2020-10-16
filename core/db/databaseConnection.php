<?php
$host_ip_address = "localhost";
$host_db_username = "";
$host_db_password = ""
// Create connection
$conn = new mysqli($host_ip_address, $host_db_username, $host_db_password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>