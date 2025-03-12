<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>php page</title>
</head>
<body>

<form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
    <label>Username:</label>
    <input type="text" name="username">
    <input type="submit" value="Submit">
  </form>

</body>
</html>