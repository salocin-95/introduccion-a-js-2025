const $calcularPromedioNotas = document.querySelector('#calcular-promedio-notas');
const $calcularPromedioAsistencias = document.querySelector('#calcular-promedio-asistencias');

function calcularPromedio(numeros){
    let acumulador = 0;
    for(let i=0;i<numeros.length;i++){
        acumulador += numeros[i];
    }
    return acumulador / numeros.length;
}

$calcularPromedioNotas.addEventListener('click', function(){
    const $notas = document.querySelectorAll('.nota');

    const notas = [];
    for(let i=0;i<$notas.length;i++){
        notas.push(Number($notas[i].value));
    }

    const promedio = calcularPromedio(notas);
    
    document.querySelector('#resultado-promedio-notas').textContent = Math.ceil(promedio);
});

$calcularPromedioAsistencias.addEventListener('click', function(){
    const $asistencias = document.querySelectorAll('.asistencia');

    const asistencias = [];
    for(let i=0;i<$asistencias.length;i++){
        asistencias.push(Number($asistencias[i].value));
    }

    const promedio = calcularPromedio(asistencias);
    
    document.querySelector('#resultado-promedio-asistencias').textContent = Math.ceil(promedio);
});




const $formNotas = document.querySelector('#form-notas');
$formNotas.addEventListener('submit', function(event){
    event.preventDefault();
});

const $formAsistencias = document.querySelector('#form-asistencias');
$formAsistencias.addEventListener('submit', function(event){
    event.preventDefault();
});
