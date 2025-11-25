function calcularAreaCirculo() {
    let radio = document.getElementById("radio").value;
    radio = Number(radio);

    if (radio <= 0 | isNaN(radio)) {
        document.getElementById("resultado").innerHTML = "Ingrese un radio válido.";
        return;
    }

    let area = areaCirculo(radio);

    document.getElementById("resultado").innerHTML =
        "El área del círculo es: " + area.toFixed(2);
}


function areaCirculo(r) {
    return Math.PI * (r * r);
}
