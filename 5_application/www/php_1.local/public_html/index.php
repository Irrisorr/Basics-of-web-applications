<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <?php
    echo "<h1>Nasz system</h1>";
    ?>
    <form>
        <legend>Dane logowania</legend>
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