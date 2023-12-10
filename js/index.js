const close = document.getElementById('close')

const buttons = document.getElementsByClassName('boxCar');

const buttonsArray = Array.from(buttons);

buttonsArray.forEach((button, index) => {
    button.addEventListener('click', () => {
        mostrarModal();
        const buttonclicked = index + 1;
        mostrarDadosCarro(buttonclicked);
        console.log(buttonclicked)
    });
});

close.addEventListener('click', ()=>{
    esconderModal();
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
    const screen = document.getElementById('screen')
    if(index == 1){
        const info = `
        <img src="./img/HB20-Comfort-Plus-1.webp" alt="HB20" style="width:300px">
        <p>HB20 ano 2021</p>
        <p>Descubra a emoção de dirigir o HB20 2021! Com design moderno e tecnologia avançada, este veículo é a combinação perfeita entre estilo e desempenho. Venha conhecer o HB20 2022 e transforme cada viagem em uma aventura emocionante!</p>
        `
        screen.innerHTML = info
    }

    if(index == 2){
        const info = `
        <img src="./img/5HA.webp" alt="onix" style="width: 300px;">
        <p>ONIX ano 2023</p>
        <p>Explore a excelência do novo Onix 2023! Com um design arrojado e repleto de tecnologia. Desfrute da eficiência energética e do desempenho confiável que o Onix 2023 oferece. Não espere mais para vivenciar a próxima geração de automóveis.</p>
        `
        screen.innerHTML = info
    }

    if(index == 3){
        const info = `
        <img src="./img/vw-polo-gti-2022-1160x652.webp" alt="Polo gti" style="width:300px">
        <p>Polo GTI ano 2022</p>
        <p>Entre no mundo da alta performance com o Polo GTI 2022! Este veículo icônico combina elegância e potência de maneira excepcional. Sinta a combinação perfeita de luxo, esportividade e tecnologia ao dirigir o Polo GTI 2022 e descubra um novo patamar de dirigibilidade.</p>
        `
        
        screen.innerHTML = info
    }
}