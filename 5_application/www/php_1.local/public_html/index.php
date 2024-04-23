<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <?php
    echo "<h1>Nasz system</h1>";
    if (isset($_POST["signin"])) {
        echo "<p>Przesłany login: " . $_POST["login"] . "<br>";
        echo "Przesłane hasło: " . $_POST["password"] . "<br></p>";
    }
    ?>
    <form method="post">
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