<?php
header("Access-Control-Allow-Origin: *"); ?>
<?php
include "conn.php";

$sql = "SELECT * FROM transaction";
$res = $conn->query($sql);

if ($res->num_rows > 0) {
    $data = array();
    $i = 0;
    while ($row = $res->fetch_assoc()) {
        $data[$i]['document_code'] = stripslashes($row['document_code']);
        $data[$i]['document_number'] = stripslashes($row['document_number']);
        $data[$i]['user'] = stripslashes($row['user']);
        $data[$i]['total'] = stripslashes($row['total']);
        $data[$i]['date'] = stripslashes($row['date']);
        $i++;
    }
    echo json_encode([
        "status" => true,
        "message" => $data,
    ]);
} else {
    echo json_encode([
        "status" => false,
        "message" => "Email Not Found!",
    ]);
}
$conn->close();
?>