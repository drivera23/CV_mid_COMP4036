<?php

function GetMaxMinPHP(){
    $numbers = array(5, 6, 8, 11, 16, 18, 26, 27, 29, 30, 31, 33, 34, 61, 70, 75, 79, 89, 90, 92);
    echo "Given the array " + $numbers;
    $maximum = 0;
    $minimum = 0;

    foreach($numbers as $vals){
    if($vals < $minimum or $minimum == 0){
        $minimum = $vals;
    }
    if($vals > $maximum or $maximum == 0){
        $maximum = $vals;
    }
    }

    echo "The maximum is " + $maximum;
    echo "The minimum is " + $minimum;
}

?>