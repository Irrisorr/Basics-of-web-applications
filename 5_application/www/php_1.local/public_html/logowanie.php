<?php session_start();
require "funkcje.php";

if (isset($_POST["signin"])) {
    $login = test_input($_POST["login"]);
    $password = test_input($_POST["password"]);

    if(($login == $osoba1->login) && ($password == $osoba1->haslo)){
            $_SESSION["zalogowanyImie"] = $osoba1->imieNazwisko;
            $_SESSION["zalogowany"] = 1;
            header("Location: user.php");
        }
        else if(($login == $osoba2->login) && ($password == $osoba2->haslo)){
            $_SESSION["zalogowanyImie"] = $osoba2->imieNazwisko;
            $_SESSION["zalogowany"] = 1;
            header("Location: user.php");
        }
        else {
            $_SESSION["zalogowany"] = 0;
            header("Location: index.php");
        }

} else {
    header("Location: index.php");
}