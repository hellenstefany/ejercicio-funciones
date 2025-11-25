function calcularParalelepipedo() {

    let largo = Number(document.getElementById("largo").value);
    let ancho = Number(document.getElementById("ancho").value);
    let altura = Number(document.getElementById("altura").value);

    if (largo <= 0 || ancho <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Ingrese valores válidos.";
        return;
    }

    let volumen = largo * ancho * altura;

    document.getElementById("resultado").innerHTML =
        "El volumen del paralelepípedo es: " + volumen.toFixed(2);
}
