<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <?php
    require_once ("funkcje.php");
    if (!isset($_SESSION['zalogowany']) or $_SESSION['zalogowany'] != 1) {
        header("Location: index.php");
    }

    echo "<h1>Witaj " . $_SESSION['zalogowanyImie'] . "!</h1>";
    ?>

    <form action="index.php" method="post">
        <input type="submit" name="logout" value="Wyloguj">
    </form>
</body>

</html>