const $form = document.querySelector('form');

// Previene que el form se submitee, y nos permita quedarnos en la misma página
$form.addEventListener('submit', function(e){
    e.preventDefault();
    return false;
});

const edadFueraDelEvento = document.querySelector('#edad').value;
console.log(edadFueraDelEvento);

function manejarClickSaludar(){
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = document.querySelector('#edad').value;
    const saludo = `Hola ${nombre} ${apellido}, tu edad es ${edad}`;

    document.querySelector('#saludo').textContent = saludo;
    // const $saludo = document.createElement('p');
    // $saludo.textContent = saludo;
    // document.querySelector('body').appendChild($saludo);
}

const $saludar = document.querySelector('#saludar');
$saludar.addEventListener('click', manejarClickSaludar);

