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

    if(cuentaDesde.id === cuentaHacia.id){
        mostrarError('No se puede transferir entre mismas cuentas');
        return false;
    }

    if(montoSolicitado <= 0){
        mostrarError('Ingrese un monto mayor a 0');
        return false;
    }

    const descripcion = document.querySelector('#descripcion').value;
    const regexDescripcion = /^[a-z0-9 ]{3,}$/i;
    if(!regexDescripcion.test(descripcion.trim())){
        mostrarError('La descripción debe contener sólo letras y números y al menos 3 caracteres');
        return false;
    }

    if(cuentaDesde.saldo >= montoSolicitado){
        alert('Transferencia realizada!');
    }else{
        mostrarError('la transferencia NO se puede hacer, saldo insuficiente');
        return false;
    }
});

function limpiarErrores(){
    const $errores = document.querySelector('#errores');
    $errores.innerHTML = '';
}


function mostrarError(error){
    const $errores = document.querySelector('#errores');
    $errores.innerHTML = `<p>${error}</p>`;
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