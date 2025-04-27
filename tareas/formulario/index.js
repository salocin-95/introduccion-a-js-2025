document.addEventListener('DOMContentLoaded', function(){
    mostrarCuentas();
});

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    // ver de qué cuenta a qué cuenta (de qué ID a qué ID)
    const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
    const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
    
    // encontrar la cuenta DESDE con el ID que me pasaron (el que tiene el <select>)
    const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
    const cuentaHacia = encontrarCuentaPorId(cuentaHaciaId);

    const montoSolicitado = Number(document.querySelector('#monto').value);

    // verificar que no se transfiera entre mismas cuentas
    if(cuentaDesde.id === cuentaHacia.id){
        console.log('No se puede transferir entre mismas cuentas');
        return false;
    }

    // verificar que el monto sea mayor a 0
    if(montoSolicitado <= 0){
        console.log('Ingrese un monto mayor a 0');
        return false;
    }

    // verificar que el saldo disponible es >= al monto solicitado
    if(cuentaDesde.saldo >= montoSolicitado){
        console.log('la transferencia se puede hacer');
    }else{
        console.log('la transferencia NO se puede hacer, saldo insuficiente.');
    }
});

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