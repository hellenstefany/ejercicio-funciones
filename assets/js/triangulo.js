function calcularAreaTriangulo() {
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    if (base <= 0 | altura <= 0 | isNaN(base) | isNaN(altura)) {
        document.getElementById("resultado").innerHTML =
            "Ingrese valores válidos para base y altura.";
        return;
    }

    let area = areaTriangulo(base, altura);

    document.getElementById("resultado").innerHTML =
        "El área del triángulo es: " + area.toFixed(2);
}

function areaTriangulo(b, h) {
    return (b * h) / 2;
}
