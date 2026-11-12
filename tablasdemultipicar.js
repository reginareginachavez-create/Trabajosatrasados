const inputNumero = document.getElementById('numero');
const valNumero = document.getElementById('valNumero');
const contenedorResultado = document.getElementById('resultado');
const btnReset = document.getElementById('btnReset');
let temporizador;

function generarTabla(numero) {
    valNumero.textContent = numero;
    
    contenedorResultado.innerHTML = `<img src="gif/spinner gif.gif" width="50px" alt="Cargando...">`;

    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
        let html = '<ul class="list-unstyled fs-5 p-0 m-0">';
        for (let i = 1; i <= 10; i++) {
            html += `<li>${numero} × ${i} = <strong>${numero * i}</strong></li>`;
        }
        html += '</ul>';
        
        contenedorResultado.innerHTML = html;
    }, 500);
}

inputNumero.addEventListener('input', (e) => {
    generarTabla(e.target.value);
});

btnReset.addEventListener('click', () => {
    inputNumero.value = 1;
    generarTabla(1);
});

generarTabla(inputNumero.value);