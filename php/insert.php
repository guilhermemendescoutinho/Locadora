<?php
$file_path = '../dadosJson/dataUser.json';

$json_content = file_get_contents($file_path);

$list_data = json_decode($json_content, true);

if ($list_data === null) {
    $list_data = array();
}

$new_array = array(
    'nome' => $_POST['nome'],
    'CPF' => $_POST['CPF'],
    'email' => $_POST['email'],
    'senha' => $_POST['senha'],
    'endereco' => $_POST['endereco'],
    'cidade' => $_POST['cidade'],
    'estado' => $_POST['estado'],
    'cep' => $_POST['cep'],
    'nomeCartao' => $_POST['nomeCartao'],
    'expMes' => $_POST['expMes'],
    'expAno' => $_POST['expAno'],
    'numCartao' => $_POST['numCartao'],
    'codSeg' => $_POST['codSeg'],
);

$list_data[] = $new_array;

$new_json = json_encode($list_data, JSON_PRETTY_PRINT);

var_dump($new_json);

file_put_contents($file_path, $new_json);

header('location: ..');
exit();
?>