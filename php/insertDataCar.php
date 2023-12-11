<?php
$file_path = '../dadosJson/dataNewcar.json';

$json_content = file_get_contents($file_path);

$list_data = json_decode($json_content, true);

if ($list_data === null) {
    $list_data = array();
}

$new_array = array(
    'carName' => $_POST['carName'],
    'description' => $_POST['description'],
    'contact' => $_POST['contact'],
    'urlImg' => $_POST['urlImg']
);

$list_data[] = $new_array;

$new_json = json_encode($list_data, JSON_PRETTY_PRINT);

var_dump($new_json);

file_put_contents($file_path, $new_json);

header('location: ../dashboard.php');
exit();
?>