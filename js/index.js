const close = document.getElementById('close')
const buttons = document.getElementsByClassName('boxCar');
const buttonsArray = Array.from(buttons);
const buttonAddCar = document.getElementById('botaoAnuncio')
const screen = document.getElementById('screen');
const sendData = document.getElementById('sendData')

buttonsArray.forEach((button, index) => {
    button.addEventListener('click', () => {
        mostrarModal();
        const buttonclicked = index + 1;
        mostrarDadosCarro(buttonclicked);
        if (buttonclicked < 4) {
            screen.setAttribute('action', './alugar.html');
            screen.setAttribute('method', 'post');
        }
    });
});

close.addEventListener('click', () => {
    esconderModal();
})

buttonAddCar.addEventListener('click', () => {
    mostrarModal();
    addCar();
})

function esconderModal() {
    const modal = document.getElementsByClassName('buy')[0];
    modal.classList.remove('mostrar');
}

function mostrarModal() {
    const modal = document.getElementsByClassName('buy')[0];
    modal.classList.add('mostrar');
}

function mostrarDadosCarro(index) {
    if (index == 1) {
        const info = `
        <img src="./img/HB20-Comfort-Plus-1.webp" alt="HB20" style="width:300px">
        <p>HB20 ano 2021</p>
        <p>Descubra a emoção de dirigir o HB20 2021! Com design moderno e tecnologia avançada, este veículo é a combinação perfeita entre estilo e desempenho. Venha conhecer o HB20 2022 e transforme cada viagem em uma aventura emocionante!</p>
        <button type="submit"  style="border-radius: 5px; margin: 20px; padding: 10px;" id='alugar' >Alugar</button>
        `
        screen.innerHTML = info
    }

    if (index == 2) {
        const info = `
        <img src="./img/5HA.webp" alt="onix" style="width: 300px;">
        <p>ONIX ano 2023</p>
        <p>Explore a excelência do novo Onix 2023! Com um design arrojado e repleto de tecnologia. Desfrute da eficiência energética e do desempenho confiável que o Onix 2023 oferece. Não espere mais para vivenciar a próxima geração de automóveis.</p>
        <button style="border-radius: 5px; margin: 20px; padding: 10px;" id='alugar' type="submit"  >Alugar</button>
        `
        screen.innerHTML = info
    }

    if (index == 3) {
        const info = `
        <img src="./img/vw-polo-gti-2022-1160x652.webp" alt="Polo gti" style="width:300px">
        <p>Polo GTI ano 2022</p>
        <p>Entre no mundo da alta performance com o Polo GTI 2022! Este veículo icônico combina elegância e potência de maneira excepcional. Sinta a combinação perfeita de luxo, esportividade e tecnologia ao dirigir o Polo GTI 2022 e descubra um novo patamar de dirigibilidade.</p>
        <button style="border-radius: 5px; margin: 20px; padding: 10px;" id='alugar' type="submit" >Alugar</button>
        `

        screen.innerHTML = info
    }

    if (index > 3) {
        fetch('./dadosJson/dataNewCar.json').then((response) => {
            response.json().then((carro) => {
                console.log(carro);

                const indexList = index - 4

                console.log(carro[indexList].carName);

                const info = `
                <img src="${carro[indexList].urlImg}" alt="Polo gti" style="width:300px">
                <p>${carro[indexList].carName}</p>
                <p>${carro[indexList].description}</p>
                <p>Entre em contato com: ${carro[indexList].contact}</p>
                <p style="color:red;">ATENÇÃO! NÃO NOS RESPONSABILIZAMOS PELOS ANUNCIOS DE TERCEIROS, NEGOCIE COM O PROPRIETÁRIO DO VEÍCULO.</p>
                `

                screen.innerHTML = info
            })
        })
    }
}

function addCar() {

    screen.removeAttribute('action');
    screen.removeAttribute('method');

    const info = `
    <form action="./php/insertDataCar.php" method="post">
    <h3 style="margin: 10px;" >Anuncie seu veículo</h3>
    <input  style="margin: 10px; width: 70%; border: 2px black solid;"  type="text" placeholder="nome do carro" name="carName" required>
    <textarea name="description" required style="width: 70%;margin: 10px; border: 2px black solid;"  id="descriptionID" cols="50" rows="3" placeholder="Descreva seu veículo brevemente" maxlength="200"></textarea>
    <input style="margin: 10px; width: 70%; border: 2px black solid;" type="text" placeholder="Informe contato para negociar"
    name="contact" required>
    <input style="margin: 10px; width: 70%; border: 2px black solid;" type="text" placeholder="endereço da imagem" name="urlImg" required>
    <p>Atenção, faça upload da imagem em alguma plataforma na nuvem, ou uma imagem do navegador e informe o link no campo acima.</p>
    <button style="border-radius: 5px; margin: 20px; padding: 10px;" id="sendData" type="submit">Enviar</button>
    </form>
    `

    screen.innerHTML = info
}

function confirm() {
    const info = `
    <form action="./php/alugar.php" method="post">
    <h3>Alugar</h3>
    <p>Informe por quais dias você pretende alugar o veículo.</p>
    <input type="date" placeholder="informe as datas" name="date">
    <p>Os dados sobre o pagamento serão informado em seu banco em que foram disponibilizado os dados.</p>
    <button type="submit" style="border-radius: 5px; margin: 20px; padding: 10px;">Confirmar</button>
    </form>
    `
    screen.innerHTML = info;
}