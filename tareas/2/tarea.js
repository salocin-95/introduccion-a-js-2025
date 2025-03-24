const $contenedorResultado = document.querySelector('#contenedor-resultado');
$contenedorResultado.style.display = 'none';

const $integrantes = document.querySelector('#integrantes');
const $promedio = document.querySelector('#promedio');

document.querySelector('#formulario-integrantes').addEventListener('submit', function(event){
    event.preventDefault();

    const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);

    for(let i=0; i<cantidadIntegrantes; i++){
        console.log('Creando el input número: ', i);
        const idIntegrante = 'integrante-' + i;
    
        const $label = document.createElement('label');
        $label.textContent = 'Salario del integrante ' + (i + 1);
        $label.htmlFor = idIntegrante;
    
        const $input = document.createElement('input');
        $input.id = idIntegrante;
        $input.className = 'integrante';
        $input.type = "number";
        $input.min = 0;
    
        const $removerIntegrante = document.createElement('button');
        $removerIntegrante.textContent = 'Remover';
        $removerIntegrante.addEventListener('click', function(){
            $label.remove();
            $input.remove();
            $removerIntegrante.remove();
            $br.remove();
        });

        const $br = document.createElement('br');
    
        $integrantes.appendChild($label);
        $integrantes.appendChild($input);
        $integrantes.appendChild($removerIntegrante);
        $integrantes.appendChild($br);
    }
});

document.querySelector('#calcular').addEventListener('click', function(){
    const $salarios = document.querySelectorAll('.integrante');
    const salarios = [];
    for(let i=0;i<$salarios.length;i++){
        salarios.push(Number($salarios[i].value));
    }

    const promedio = calcularPromedio(salarios);
    $promedio.textContent = promedio;
    $contenedorResultado.style.display = '';
});

function calcularPromedio(numeros){
    let acumulador = 0;
    for(let i=0;i<numeros.length;i++){
        acumulador += numeros[i];
    }
    return acumulador / numeros.length;
}

document.querySelector('#recargar').addEventListener('click', function(){
    window.location.reload();
});
