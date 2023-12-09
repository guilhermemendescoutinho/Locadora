<?php
$file_path = '../dadosJson/dataUser.json';

$json_content = file_get_contents($file_path);

$list_data = json_decode($json_content, true);

if ($list_data === null) {
    //json vazio
    die('Dados não cadastrados.');
}

$form_email = $_POST['email'];
$form_password = $_POST['senha'];

$index = array_search($form_email, array_column($list_data, 'email'));

if ($index !== false) {
    $lista_user = $list_data[$index];

    if($form_password === $lista_user['senha']){
        echo "Foi efeituado Login" ;
    }else{
        echo "Dados incoerentes";
    }
} else {
    echo 'Não foi encontrado um registro.';
}
?>