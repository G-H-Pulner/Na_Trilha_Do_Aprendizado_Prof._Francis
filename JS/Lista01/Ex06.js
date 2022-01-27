var maior = -999999999, menor = 999999999, numero

for (var cont = 1; cont <= 5; cont++) {
    numero = parseFloat(prompt("Olá, digite um numero: "))

    if (numero >= maior) {
        maior = numero
    }
    if (numero <= menor) {
        menor = numero
    }
}
alert("O maior numero digitado é o: " + maior)
alert("O menor numero digitado é o: " + menor)