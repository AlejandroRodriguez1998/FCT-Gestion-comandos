<?php

    if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
        include 'command_w.php';
    } else {
       include 'command_l.php';
    }

?>