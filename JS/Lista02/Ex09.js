function calcular() {
    var numero

    numero = parseFloat(document.getElementById("n1").value)

    if (numero % 3 == 0) {
        document.getElementById("resultado1").innerHTML = `O numero "${numero}" é múltiplo de 3`
    } else {
        document.getElementById("resultado1").innerHTML = `O numero "${numero}" não é múltiplo de 3`
    }
    if (numero % 7 == 0) {
        document.getElementById("resultado2").innerHTML = `O numero "${numero}" é múltiplo de 7`
    } else {
        document.getElementById("resultado2").innerHTML = `O numero "${numero}" não é múltiplo de 7`
    }
}