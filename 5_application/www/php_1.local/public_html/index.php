<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <?php
    require "funkcje.php";
    echo "<h1>Nasz system</h1>";
    // if (isset($_POST["signin"])) {
    //     echo "Przesłany login: " . test_input($_POST["login"]) . "<br>";
    //     echo "Przesłane hasło: " . test_input($_POST["password"]);
    // }
    ?>
    
    <form action="logowanie.php" method="post">
        <label class="form_row">
            Login:
            <input type="text" name="login">
        </label><br>
        <label class="form_row">
            Hasło:
            <input type="password" name="password">
        </label><br>
        <input type="submit" name="signin" value="Zaloguj">
    </form>
</body>

</html>