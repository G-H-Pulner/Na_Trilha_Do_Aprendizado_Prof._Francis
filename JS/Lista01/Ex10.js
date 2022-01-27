var nome, numero, numero_sorteado = 7, max = 15, min = 0, acerto = false

nome = prompt("Digite seu nome: ")

for (var cont = 1; cont <= 4; cont++) {
    numero = parseInt(prompt(nome + ", digite um numero inteiro entre " + max + " e " + min))

    if (numero <= max && numero >= min) {
        if (numero == numero_sorteado) {
            alert("Você acertou " + nome + ", o numero certo é: " + numero_sorteado)
            acerto = true
            cont = 5
        } else {
            max--
            min++
            alert("Você errou " + nome + ". Dica: o numero é entre " + max + " e " + min)
            acerto = false
        }
    } else {
        alert("Perdeu uma chance, coloque um numero dentro do intervalo para não desperdiçar mais uma chance")
    }
}

if (acerto == false) {
    alert("Que pena " + nome + ", você não acertou, o numero certo era: " + numero_sorteado)
}