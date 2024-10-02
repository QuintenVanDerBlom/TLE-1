<?php
session_start();

/** @var mysqli $db */

// Setup connection with database
require_once 'database.php';

var_dump($_POST);

    $url = mysqli_real_escape_string($db, $_POST['url']);
    $score = mysqli_real_escape_string($db, $_POST['score']);
    $response = mysqli_real_escape_string($db, $_POST['response']);

$query = "INSERT INTO weblink (link, score, response) VALUES('$url', '$score', '$response')";

    if (mysqli_query($db, $query)) {
        echo "toegevoegd";
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($db);
    }

mysqli_close($db);
?>