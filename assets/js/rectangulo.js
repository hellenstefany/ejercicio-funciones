function calcularRectangulo() {
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (base <= 0 | altura <= 0) {
        resultado.innerHTML = "Ingrese valores válidos";
        return;
    }

    let area = base * altura;
    resultado.innerHTML = "El área es: " + area;
}
