<?php
    $conn = new mysqli("localhost", "root","","penjualan");
	if($conn->connect_errno) {
		echo $c->connect_errno;
		die();
	}
?>