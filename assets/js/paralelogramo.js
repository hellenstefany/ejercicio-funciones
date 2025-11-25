function calcularParalelogramo() {
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    if (base <= 0 | altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Ingrese valores.";
        return;
    }

    let area = base * altura;

    document.getElementById("resultado").innerHTML =
        "El área del paralelogramo es: " + area
}
