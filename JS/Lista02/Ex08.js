function calcular() {
    var numero, fatorial = 1

    numero = parseFloat(document.getElementById("n1").value)

    for (var cont = 1; cont <= numero; cont++) {
        fatorial = cont * fatorial
    }

    document.getElementById("resultado").innerHTML = `O resultado do fatorial é: ${fatorial}`
}