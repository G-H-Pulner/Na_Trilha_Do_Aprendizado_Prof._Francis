function calcular() {
    var maior = -999999999, menor = 999999999, numero, verificador = false

    for (var cont = 1; cont <= 5; cont++) {
        numero = parseFloat(document.getElementById("n" + cont).value)

        if (numero >= maior) {
            maior = numero
            verificador = true
        }
        if (numero <= menor) {
            menor = numero
            verificador = true
        }
    }

    if (verificador == true) {
        document.getElementById("resultado1").innerHTML = `O maior numero digitado é o: ${maior}`

        document.getElementById("resultado2").innerHTML = `O menor numero digitado é o: ${menor}`
    } else {
        document.getElementById("resultado1").innerHTML = `Nenhum numero foi digitado`

        document.getElementById("resultado2").innerHTML = `Nenhum numero foi digitado`
    }
}