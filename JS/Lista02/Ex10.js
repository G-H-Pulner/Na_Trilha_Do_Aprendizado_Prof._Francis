function calcular() {
    var nome, numero, numero_sorteado = 7, max = 15, min = 0, acerto = false

    nome = document.getElementById("nome").value

    for (var cont = 1; cont <= 4; cont++) {

        document.getElementById("teste").innerHTML = `${nome}, digite um numero inteiro entre ${max} e ${min}`

        numero = parseInt(document.getElementById("numero").value)

        if (numero <= max && numero >= min) {
            if (numero == numero_sorteado) {
                document.getElementById("resultado").innerHTML = `Você acertou ${nome}, o numero certo é: ${numero_sorteado}`
                acerto = true
                cont = 5
            } else {
                max--
                min++
                document.getElementById("resultado").innerHTML = `Você errou ${nome}. Dica: o numero é entre ${max} e ${min}`
                acerto = false
            }
        } else {
            document.getElementById("resultado").innerHTML = `Perdeu uma chance, coloque um numero dentro do intervalo para não desperdiçar mais uma chance`
        }
    }

    if (acerto == false) {
        document.getElementById("resultado").innerHTML = `Que pena ${nome}, você não acertou. o numero certo era: ${numero_sorteado}`
    }
}