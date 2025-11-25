function calcularTrapecio() {
    let B = Number(document.getElementById("baseMayor").value);
    let b = Number(document.getElementById("baseMenor").value);
    let h = Number(document.getElementById("altura").value);
    let out = document.getElementById("resultado");

    if (B <= 0 | b <= 0 | h <= 0) {
        out.innerHTML = "Ingrese valores válidos";
        return;
    }

    let area = ((B + b) * h) / 2;

    out.innerHTML = "El área es: " + area;
}
