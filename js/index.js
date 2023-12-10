const close = document.getElementById('close')

const buttons = document.getElementsByClassName('boxCar');

const buttonsArray = Array.from(buttons);

const buttonAddCar = document.getElementById('botaoAnuncio')

const screen = document.getElementById('screen');

buttonsArray.forEach((button, index) => {
    button.addEventListener('click', () => {
        mostrarModal();
        const buttonclicked = index + 1;
        mostrarDadosCarro(buttonclicked);
    });
});

close.addEventListener('click', ()=>{
    esconderModal();
})

buttonAddCar.addEventListener('click', ()=>{
    mostrarModal();
    addCar();
})

function esconderModal(){
    const modal = document.getElementsByClassName('buy')[0];
    modal.classList.remove('mostrar');
}

function mostrarModal() {
    const modal = document.getElementsByClassName('buy')[0];
    modal.classList.add('mostrar');
}

function mostrarDadosCarro(index){
    if(index == 1){
        const info = `
        <img src="./img/HB20-Comfort-Plus-1.webp" alt="HB20" style="width:300px">
        <p>HB20 ano 2021</p>
        <p>Descubra a emoção de dirigir o HB20 2021! Com design moderno e tecnologia avançada, este veículo é a combinação perfeita entre estilo e desempenho. Venha conhecer o HB20 2022 e transforme cada viagem em uma aventura emocionante!</p>
        <button style="border-radius: 5px; margin: 20px; padding: 10px;" >Alugar</button>
        `
        screen.innerHTML = info
    }

    if(index == 2){
        const info = `
        <img src="./img/5HA.webp" alt="onix" style="width: 300px;">
        <p>ONIX ano 2023</p>
        <p>Explore a excelência do novo Onix 2023! Com um design arrojado e repleto de tecnologia. Desfrute da eficiência energética e do desempenho confiável que o Onix 2023 oferece. Não espere mais para vivenciar a próxima geração de automóveis.</p>
        <button style="border-radius: 5px; margin: 20px; padding: 10px;" >Alugar</button>
        `
        screen.innerHTML = info
    }

    if(index == 3){
        const info = `
        <img src="./img/vw-polo-gti-2022-1160x652.webp" alt="Polo gti" style="width:300px">
        <p>Polo GTI ano 2022</p>
        <p>Entre no mundo da alta performance com o Polo GTI 2022! Este veículo icônico combina elegância e potência de maneira excepcional. Sinta a combinação perfeita de luxo, esportividade e tecnologia ao dirigir o Polo GTI 2022 e descubra um novo patamar de dirigibilidade.</p>
        <button style="border-radius: 5px; margin: 20px; padding: 10px;" >Alugar</button>
        `
        
        screen.innerHTML = info
    }
}

function addCar (){
    const info = `
    <h3 style="margin: 10px;" >Anuncie seu veículo</h3>
    <input  style="margin: 10px; width: 70%; border: 2px black solid;"  type="text" placeholder="nome do carro">
    <textarea name="descricao"  style="width: 70%;margin: 10px; border: 2px black solid;"  id="descricaoID" cols="50" rows="3" placeholder="Descreva seu veículo brevemente" maxlength="200"></textarea>
    <input style="margin: 10px; width: 70%; border: 2px black solid;" type="text" placeholder="endereço da imagem">
    <p>Atenção, faça upload da imagem em alguma plataforma na nuvem, ou uma imagem do navegador e informe o link no campo acima.</p>
    <button style="border-radius: 5px; margin: 20px; padding: 10px;">Enviar</button>
    `

    screen.innerHTML = info
}