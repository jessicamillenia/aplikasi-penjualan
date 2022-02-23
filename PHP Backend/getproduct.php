<?php
header("Access-Control-Allow-Origin: *"); ?>
<?php
include "conn.php";

$sql = "SELECT * FROM product";
$res = $conn->query($sql);

if ($res->num_rows > 0) {
    $data = array();
    $i = 0;
    while ($row = $res->fetch_assoc()) {
        $data[$i]['idproduct'] = stripslashes($row['idproduct']);
        $data[$i]['name'] = stripslashes($row['name']);
        $data[$i]['price'] = stripslashes($row['price']);
        $data[$i]['currency'] = stripslashes($row['currency']);
        $data[$i]['discount'] = stripslashes($row['discount']);
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