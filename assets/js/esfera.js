function calcularVolumenEsfera() {
    let r = Number(document.getElementById("radio").value);

    if (r <= 0) {
        document.getElementById("resultado").innerHTML = "Ingrese un valor válido";
        return;
    }

    let volumen = (4 / 3) * Math.PI * Math.pow(r, 3);

    document.getElementById("resultado").innerHTML =
        "El volumen de la esfera es: " + volumen.toFixed(2);
}
