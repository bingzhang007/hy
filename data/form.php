<?php
    session_start();
    $code=$_REQUEST["code"];
        if(strtolower($_REQUEST['code']) == strtolower($_SESSION['VerifyCode'])) {
            echo 1;
        } else {
            echo -1;
        }


?>