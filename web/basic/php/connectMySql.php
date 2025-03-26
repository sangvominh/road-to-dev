<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OOP php</title>
</head>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password);

if($conn -> connect_error)
    echo "connection failed" . $conn -> connect_error;
else
    echo "passsssssssssssssssssssssssss successssssssssssssssss"

?>

</body>
</html>