document.addEventListener('DOMContentLoaded', function(){
    mostrarCuentas();
});

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    limpiarErrores();

    const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
    const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
    
    const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
    const cuentaHacia = encontrarCuentaPorId(cuentaHaciaId);

    const montoSolicitado = Number(document.querySelector('#monto').value);

    let puedeTransferir = true;

    if(cuentaDesde.id === cuentaHacia.id){
        puedeTransferir = false;
        const errorMismaCuenta = 'No se puede transferir entre mismas cuentas';
        mostrarError(document.querySelector('#cuenta-desde-error'), errorMismaCuenta);
        mostrarError(document.querySelector('#cuenta-hacia-error'), errorMismaCuenta);
    }

    if(montoSolicitado <= 0){
        puedeTransferir = false;
        mostrarError(document.querySelector('#monto-error'),'Ingrese un monto mayor a 0');
    }

    const descripcion = document.querySelector('#descripcion').value;
    const regexDescripcion = /^[a-z0-9 ]{3,}$/i;
    if(!regexDescripcion.test(descripcion.trim())){
        puedeTransferir = false;
        mostrarError(document.querySelector('#descripcion-error'),'La descripción debe contener sólo letras y números y al menos 3 caracteres');
    }

    if(montoSolicitado <= 0){
        puedeTransferir = false;
        mostrarError(document.querySelector('#errores'), 'La transferencia NO se puede hacer. El monto debe ser mayor a 0');
    }

    if(cuentaDesde.saldo < montoSolicitado){
        puedeTransferir = false;
        mostrarError(document.querySelector('#errores'), 'La transferencia NO se puede hacer. Saldo insuficiente o el monto debe ser mayor a 0');
    }

    if(puedeTransferir){
        alert('Transferencia realizada con éxito');
    }

    return puedeTransferir;
});

function limpiarErrores(){
    const $errores = document.querySelectorAll('.error');
    for(let i=0; i<$errores.length; i++){
        $errores[i].textContent = '';
    }
}


function mostrarError($elementoError, error){
    $elementoError.textContent = error;
}

function mostrarCuentas(){
    const $cuentasDesde = document.querySelector('#cuenta-desde');
    const $cuentasHacia = document.querySelector('#cuenta-hacia');

    for(let i=0; i<cuentas.length; i++){
        const cuenta = cuentas[i];

        const $cuentaDesde = document.createElement('option');
        $cuentaDesde.setAttribute('id', 'cuenta-' +cuenta.id);
        $cuentaDesde.setAttribute('value', cuenta.id);
        $cuentaDesde.textContent = `${cuenta.nombre} ($${cuenta.saldo})`;
        $cuentasDesde.appendChild($cuentaDesde);

        const $cuentaHacia = document.createElement('option');
        $cuentaHacia.setAttribute('id', 'cuenta-' +cuenta.id);
        $cuentaHacia.setAttribute('value', cuenta.id);
        $cuentaHacia.textContent = cuenta.nombre;
        $cuentasHacia.appendChild($cuentaHacia);
    }
}

function encontrarCuentaPorId(id){
    for(let i=0; i<cuentas.length; i++){
        if(cuentas[i].id.toString() === id){
            return cuentas[i];
        }
    }
}