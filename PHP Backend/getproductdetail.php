<?php
header("Access-Control-Allow-Origin: *");

$idd = $_GET['id'];

include "conn.php";
$sql = "SELECT * FROM product where idproduct = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $idd);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo "Unable to process your request, please try again";
    die();
}
$stmt->close();
$conn->close();
