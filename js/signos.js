var valorDia = document.getElementById("valorDia");
var dia = document.getElementById("dia");
var mes = document.getElementById("mes");
var signo = document.getElementById("signo");
var fecha = document.getElementById("fecha");
var btnReset = document.getElementById("reset");

function verSigno() {
    let d = parseInt(dia.value);
    let m = mes.value;

    valorDia.textContent = "DIA " + d;
    fecha.textContent = d + " de " + m;

    var imgSigno = "";

    switch (m) {
        case "ENERO":
            imgSigno = (d >= 20) ? "acuario" : "capricornio";
            break;
        case "FEBRERO":
            imgSigno = (d >= 19) ? "Pisis" : "acuario";
            break;
        case "MARZO":
            imgSigno = (d >= 21) ? "aries" : "Pisis";
            break;
        case "ABRIL":
            imgSigno = (d >= 20) ? "Tauro" : "aries";
            break;
        case "MAYO":
            imgSigno = (d >= 21) ? "Geminis" : "Tauro";
            break;
        case "JUNIO":
            imgSigno = (d >= 21) ? "Cancer" : "Geminis";
            break;
        case "JULIO":
            imgSigno = (d >= 23) ? "Leo" : "Cancer";
            break;
        case "AGOSTO":
            imgSigno = (d >= 23) ? "virgo" : "Leo";
            break;
        case "SEPTIEMBRE":
            imgSigno = (d >= 23) ? "Libra" : "virgo";
            break;
        case "OCTUBRE":
            imgSigno = (d >= 23) ? "escorpio" : "Libra";
            break;
        case "NOVIEMBRE":
            imgSigno = (d >= 22) ? "Sagitario" : "escorpio";
            break;
        case "DICIEMBRE":
            imgSigno = (d >= 22) ? "capricornio" : "Sagitario";
            break;
    }

    signo.src = "img/" + imgSigno + ".png";
}

dia.addEventListener("input", verSigno);
mes.addEventListener("change", verSigno);

btnReset.onclick = function() {
    dia.value = 1;
    mes.value = "ENERO";
    valorDia.textContent = "DIA 1";
    fecha.textContent = "FECHA";
    signo.src = "img/zodiaco.png";
};