function calcularVolumenCubo() {
    let lado = Number(document.getElementById("lado").value);

    if (lado <= 0) {
        document.getElementById("resultado").innerHTML = "Ingrese un valor válido";
        return;
    }

    let volumen = Math.pow(lado, 3);

    document.getElementById("resultado").innerHTML =
        "El volumen del cubo es: " + volumen;
}
