const calcular = () => {
    var producto = document.querySelector("#producto").value;
    var img = document.querySelector("#img");
    var precio = document.querySelector("#precio");
    
    var costo = 0;
    var plazo = 0;
    var aumento = 0;

    img.innerHTML = `<img src="img/${producto}.png" class="img-fluid rounded shadow" style="max-height: 300px;">`;
    
    switch(producto){
        case "Bolsa": costo = 4500; break;
        case "Reloj": costo = 8500; break;
        case "Perfume": costo = 2800; break;
        case "Piano": costo = 45000; break;
        case "Sala": costo = 18000; break;
    }
    
    precio.innerHTML = "Precio: $ " + costo.toFixed(2) + " MXN";
    
    var uno = document.querySelector("#uno");
    var dos = document.querySelector("#dos");
    var cantidad = document.querySelector("#cantidad").value;

    if(uno.checked){
        plazo = 6;
        aumento = 0.10;
    } else if(dos.checked){
        plazo = 12;
        aumento = 0.15;
    } else {
        plazo = 18;
        aumento = 0.20;
    }

    var contado = costo * cantidad;
    var credito = contado + (contado * aumento);
    var abono = credito / plazo;

    document.querySelector("#contado").innerHTML = "Precio de Contado: $ " + contado.toFixed(2) + " MXN";
    document.querySelector("#credito").innerHTML = "Precio a Crédito: $ " + credito.toFixed(2) + " MXN";
    document.querySelector("#abono").innerHTML = "Abono Mensual: $ " + abono.toFixed(2) + " MXN";
}