<?php


/*print_r($_REQUEST);*/

$name = $_POST['name'];
$data = $_POST['data'];

$mydata = $_POST;
$mydata['status'] = 'Оставить отзыв?';


echo json_encode($mydata);
