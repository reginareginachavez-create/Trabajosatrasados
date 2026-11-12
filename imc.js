const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');

function calcularIMC() {
    for (let i = 1; i <= 6; i++) {
        let caja = document.querySelector('#imc' + i);
        caja.style.transition = "0.4s";
        caja.style.transform = "scale(1)";
        caja.style.position = "relative";
        caja.style.zIndex = "1";
    }

    let p = parseFloat(peso.value);
    let a = parseFloat(altura.value) / 100;
    let imc = (p / (a * a)).toFixed(2);

    document.querySelector('#vpeso').textContent = p;
    document.querySelector('#valtura').textContent = a.toFixed(2);
    document.querySelector('#imc').textContent = imc;

    let tipo = 6;
    if (imc < 18.5) tipo = 1;
    else if (imc < 25) tipo = 2;
    else if (imc < 30) tipo = 3;
    else if (imc < 35) tipo = 4;
    else if (imc < 40) tipo = 5;

    let activa = document.querySelector('#imc' + tipo);
    activa.style.transform = "scale(1.1)";
    activa.style.zIndex = "5";
}

function reiniciar() {
    peso.value = 31;
    altura.value = 120;
    calcularIMC();
}

peso.oninput = calcularIMC;
altura.oninput = calcularIMC;

calcularIMC();