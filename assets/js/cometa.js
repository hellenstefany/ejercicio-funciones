
function calcularAreaCometa() {
    const D = Number(document.getElementById("D").value);
    const d = Number(document.getElementById("d").value);
    const out = document.getElementById("resultado");

    if (isNaN(D) | isNaN(d) | D <= 0 | d <= 0) {
        out.innerHTML = "Ingrese valores para las diagonales.";
        return;
    }

    const area = (D * d) / 2;
    out.innerHTML = "El área es: " + area;
}
