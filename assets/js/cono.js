function calcularVolumenCono() {
    let r = Number(document.getElementById("radio").value);
    let h = Number(document.getElementById("altura").value);

    if (r <= 0 || h <= 0) {
        document.getElementById("resultado").innerHTML = "Valores no válidos";
        return;
    }

    let volumen = (1/3) * Math.PI * Math.pow(r, 2) * h;

    document.getElementById("resultado").innerHTML =
        "El volumen es: " + volumen;
}
