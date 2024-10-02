<?php 
require_once('php/getApiKey.php');
?>

<!DOCTYPE html>
<html lang="en">

<script type="importmap">
    {
      "imports": {
        "@google/generative-ai": "https://esm.run/@google/generative-ai"
      }
    }
</script>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress Bar</title>
    <link rel="stylesheet" href="./css/index.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="module" src="./js/main.js"></script>
</head>



    <script defer type="module" src="./js/main.js"></script>

<body>
<?php require_once('nav.html'); ?>
    <section class="main">
        <form>
            <label for="prompt">Enter the URL of your news website here: </label>
            <div id="forms">
            <input type="text" id="prompt" name="prompt" width="5000px" value="https://nos.nl/">
            <button type="button" id="myButton">Check the Trustworthiness</button>
            </div>
        </form>
        <div class="container">
            <div class="Score">
                <div class="progress-bar">
                    <svg viewBox="0 0 100 100" width="150" height="150">
                        <circle cx="50" cy="50" r="45" stroke="#e0e0e0" stroke-width="10" fill="none"></circle>

                        <circle id="fill" cx="50" cy="50" r="45" stroke="#4caf50" stroke-width="10" fill="none" stroke-dasharray="283"
                            stroke-dashoffset="283"></circle>
                    </svg>
                </div>
                <div id="response"></div>
            </div>
            <textarea id="resultarea"></textarea>
        </div>
    </section>

    <!-- Site footer -->
    <footer>
        <div class="footer-content">
            <p>© 2024  | All Rights Reserved to Jaimy, Quinten, Hidde, David, Sem en Marijn</p>

        </div>
    </footer>
</body>

</html>