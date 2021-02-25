<?php
session_start();
if($_GET['la']){
    $_SESSION['la'] = $_GET['la'];
    header('Location:'.$_SERVER['PHP_SELF']);
    exit();
}

switch($_SESSION['la']){
     case "eng":
        require('lang/eng.php');
    break;
    case "bg":
        require('lang/bg.php');
    break;
    case "it":
        require('lang/it.php');
    break;
    default:
        require('lang/eng.php');
    }
?>

<!DOCTYPE html>
<html lang="bg">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title><?php echo $lang['index-title'];?></title>
    </head>
    <body>
        <h1><?php echo $lang['index-h1'];?></h1>
        <a href="index.php?la=eng"><img src="flags/eng.png" /></a>
        <a href="index.php?la=bg"><img src="flags/bg.png" /></a>
        <a href="index.php?la=it"><img src="flags/it.png" /></a>
        <div tabindex="-1" class="collection">
            <img src="icons/lamatta.svg" alt="La Matta logo" class="logo">
            <p><?php echo $lang['index-lamatta'];?> <a href="https://area98.it/collections/lamatta" target="_blank"><?php echo $lang['index-learn-more'];?></a></p>
            <button>⬇</button>
            <div class="fullimg">
                <img src='pictures/0.JPG' alt="picture of a La Matta" class="displayed">
            </div>
            <div class="thumb-bar"></div>
        </div>
        <div tabindex="-1" class="collection">
            <img src="icons/kaos.svg" alt="Kaos logo" class="logo">
            <p><?php echo $lang['index-kaos'];?> <a href="https://area98.it/collections/kaos" target="_blank"><?php echo $lang['index-learn-more'];?></a></p>
            <button>⬇</button>
            <div class="fullimg">
                <img src="pictures/6.JPG" alt="picture of a Kaos" class="displayed">
            </div>
            <div class="thumb-bar"></div>
        </div>
        <div tabindex="-1" class="collection">
            <img src="icons/robertrudger.svg" alt="Robert Rudget logo" class="logo">
            <p><?php echo $lang['index-rudger'];?> <a href="https://area98.it/collections/robertrudger" target="_blank"><?php echo $lang['index-learn-more'];?></a></p>
            <button>⬇</button>
            <div class="fullimg">
                <img src="pictures/12.JPG" alt="picture of a Robert Rudger" class="displayed">
            </div>
            <div class="thumb-bar"></div>
        </div>
        
        
        
        <script src="main.js"></script>
    </body>
</html>