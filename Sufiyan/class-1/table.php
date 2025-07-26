<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php

$name = "ali";
$email = "ali@gmail.com";
$pass = "abc123"

?>

<table border="2">
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>pass</th>

    </tr>
    <tr>
        <td> <?php  echo $name ?></td>
        <td> <?php  echo $email ?></td>
        <td> <?php  echo $pass ?></td>
    </tr>
</table>

</body>
</html>