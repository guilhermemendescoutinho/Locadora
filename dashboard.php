<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Carros disponiveis</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            overflow-x: hidden;
        }

        button {
            border: none;
        }

        .carContainer {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            color: white;
        }

        .boxCar {
            height: 200px;
            width: 200px;
            box-shadow: 2px 4px 7px 4px ghostwhite;
            margin: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: black;
            background-color: white;
            padding: 10px;
        }

        .boxCar img {
            height: 100px;
            width: 150px;
            text-align: center;
        }

        .anuncie {
            background-color: black;
            color: white;
            border-radius: 7px;
            padding: 10px;
        }

        .buy {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 59%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(255, 255, 255, 1);
            /* Adicione uma cor de fundo para ser visível */
            border-radius: 10px;
            /* Arredonda as bordas */
            padding: 20px;
            /* Adiciona espaço interno */
            text-align: center;
            /* Centraliza o texto */
            min-width: 600px;
            min-height: 500px;
            display: none;
            border: 2px black solid;
        }

        .mostrar {
            display: block !important;
        }

        .selected {
            border: black 1px;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    </style>

</head>

<body>

    <section class="buy">
        <button style="border-radius: 5px; margin: 20px; padding: 10px;" id="close">Fechar</button>
        <form class="info" id="screen">
        </form>
    </section>

    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top py-3 box-shadow" style="padding: 0 20px; display: flex; align-items: center; justify-content: space-between;">
        <a href="index.html" class="navbar-brand">
            <img src="img/caravan.svg" alt="Caravan">
        </a>

        <h3 style="margin-left: 50px;">Os melhores carros para sua viajem !</h1>

            <button class="anuncie" id="botaoAnuncio">Anuncie seu carro aqui !</button>

    </nav>
    <main class="conteiner" style="margin-top: 75px;">
        <div class="row">
            <section class="col-6">
                <img src="./img/shutterstock_1158115840-1.jpg" alt="">
            </section>
            <section class="col-6 bg-dark carContainer">
                <button class="boxCar" id="hb20">
                    <img src="./img/HB20-Comfort-Plus-1.webp" alt="HB20">
                    <p>HB20 ano 2021</p>
                </button>
                <button class="boxCar" id="onix">
                    <img src="./img/5HA.webp" alt="onix">
                    <p>ONIX ano 2023</p>
                </button>
                <button class="boxCar" id="polo">
                    <img src="./img/vw-polo-gti-2022-1160x652.webp" alt="Polo gti">
                    <p>Polo GTI ano 2022</p>
                </button>

                <?php

                $file_path = './dadosJson/dataNewCar.json';

                $json_content = file_get_contents($file_path);

                $list_data = json_decode($json_content, true);

                if ($list_data !== null) {
                    //json n vazio
                    //die('Dados não cadastrados.');

                    foreach ($list_data as $element) {
                        $string_formatada = sprintf("                <button class='boxCar' id='polo'>
                        <img src='%s' alt=''>
                        <p>%s</p>
                        </button>", $element['urlImg'],$element['carName']);
                        
                        echo $string_formatada;
                        
                    };
                }
                ?>

            </section>
        </div>
    </main>

    <script src="./js/index.js"></script>
</body>

</html>