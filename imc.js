document.querySelector("#imcForm").addEventListener("submit", function (e) {
    e.preventDefault();
    calcularIMC();
});

function calcularIMC() {
    let peso = parseFloat(document.querySelector("#peso").value);
    let altura = parseFloat(document.querySelector("#altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) return;

    let imc = peso / (altura * altura);
    let mensaje = "";
    let color = "";

    if (imc < 18.5) {
        mensaje = "Peso insuficiente";
        color = "gold";
    } else if (imc >= 18.5 && imc < 25) {
        mensaje = "Peso normal";
        color = "green";
    } else if (imc >= 25 && imc < 30) {
        mensaje = "Sobrepeso";
        color = "orange";
    } else {
        mensaje = "Obesidad";
        color = "red";
    }

    document.querySelector("#resultado").innerHTML = `
        <div style="font-size: 30px; margin-top: 15px;">
            <b style="color: blue; font-size: 40px;">${imc.toFixed(2)}</b>
            <br>
            <span style="color: ${color}; font-weight: bold;">${mensaje}</span>
        </div>
    `;
}