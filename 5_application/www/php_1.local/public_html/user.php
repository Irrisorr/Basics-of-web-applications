<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <?php
    require_once("funkcje.php");
    if (!isset($_SESSION['zalogowany']) or $_SESSION['zalogowany'] != 1) {
        header("Location: index.php");
    }

    echo "<h1>Witaj " . $_SESSION['zalogowanyImie'] . "!</h1>";

    // Обработка отправки формы для загрузки файла
    if (isset($_POST['addFile'])) {
        if ($_FILES['photoFile']['error'] === UPLOAD_ERR_OK) {
            $uploadDir = 'uploads/'; // Папка для загрузки файлов
            $uploadFile = $uploadDir . basename($_FILES['photoFile']['name']);
            if (move_uploaded_file($_FILES['photoFile']['tmp_name'], $uploadFile)) {
                echo "<p>Zdjęcie zostało załadowane na serwer</p>";
                echo "<img src='$uploadFile' alt='Uploaded Image'>";
            } else {
                echo "<p>Upload failed.</p>";
            }
        } else {
            echo "<p>File upload error.</p>";
        }
    }
    ?>

    <form action="" method="post" enctype="multipart/form-data">
        <input name="photoFile" type="file" value="Wybierz plik">
        <input type="submit" name="addFile" value="Dodaj obrazek">
    </form>

    <img src="example.png" alt="Alternate text if image not found">

    <form action="index.php" method="post">
        <input type="submit" name="logout" value="Wyloguj">
    </form>
</body>

</html>
