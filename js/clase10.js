const $form = document.querySelector('form');

$form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('form submit', event);
})

document.querySelector('input').addEventListener('focus', function(event){
    console.log('focus')
});

document.querySelector('input').addEventListener('blur', function(event){
    console.log('blur')
    const valor = document.querySelector('input').value;
    if(valor.length === 0){
        alert('por favor ingrese un nombre');
    }
});

document.querySelector('button').addEventListener('click', function(){
    console.log('click 2')
});

document.querySelector('a').addEventListener('click', function(event){
    event.preventDefault();
    alert('Acá muestro el contenido de google');
});


function saludar(nombre, genero){
    return `Hola ${nombre}, ${genero === 'masculino' ? 'Bienvenido' : 'Bienvenida'}`;
}