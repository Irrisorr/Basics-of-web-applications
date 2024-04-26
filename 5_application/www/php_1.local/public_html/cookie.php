<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <?php
    if (isset($_GET['utworzCookie']) and isset($_GET['czas']) and is_numeric($_GET['czas'])) {
        setcookie("ciasteczko", "czekoladowe", time() + $_GET['czas'], "/");
        echo "Ciasteczko upieczone<br>";
        echo "<a href='index.php'>Do głównej strony</a>";
    } else {
        header("Location: index.php");
    }
    ?>
</body>

</html>