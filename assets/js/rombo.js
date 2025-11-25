function calcularRombo() {
    let D = Number(document.getElementById("D").value);
    let d = Number(document.getElementById("d").value);
    let out = document.getElementById("resultado");

    if (D <= 0 || d <= 0) {
        out.innerHTML = "Ingrese valores válidos";
        return;
    }

    let area = (D * d) / 2;

    out.innerHTML = "El área es: " + area;
}
