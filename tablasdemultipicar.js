document.addEventListener("DOMContentLoaded", () => {
    var inputnumero1 = document.querySelector("#numero");
    var inputnumero2 = document.querySelector("#altura");
    var btnReset = document.querySelector("#reset");

    const calcular=()=> {
        let b = parseFloat(inputnumero1.value);
        let a = parseFloat(inputnumero2.value);
        document.querySelector("#vb").innerHTML = `<b style="color:red">${b}</b>`;
        document.querySelector("#va").innerHTML = `<b style="color:green">${a}</b>`;
        let resultado = (b * a);
        document.querySelector("#resultado").innerHTML = `<b style="color:blue;font-size:40px">${resultado.toFixed(2)}</b>`;
    }

    const reset=()=> {
        inputnumero1.value = 1;
        inputnumero2.value = 1;
        document.querySelector("#vb").innerHTML = "1";
        document.querySelector("#va").innerHTML = "1";
        document.querySelector("#resultado").innerHTML = "0";
    }

    inputBase.addEventListener("input", calcular, false);
    inputAltura.addEventListener("input", calcular, false);
    btnReset.addEventListener("click", reset, false);
});