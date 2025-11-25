function calcularAreaCuadrado() {
    let lado = document.getElementById("lado").value;
    lado = Number(lado);
    if (lado <= 0 || isNaN(lado)) {
        document.getElementById("resultado").innerHTML = "Ingrese un lado válido.";
        return;
    }
    let area = Math.pow(lado, 2); 
    document.getElementById("resultado").innerHTML = "El área del cuadrado es: " + area;
}
