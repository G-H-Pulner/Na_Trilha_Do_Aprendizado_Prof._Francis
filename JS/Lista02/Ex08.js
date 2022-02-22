var numero, fatorial = 1

numero = parseFloat(prompt("Digite um numero fatorial: "))

for (var cont = 1; cont <= numero; cont++) {
    fatorial = cont * fatorial
}

alert("O resultado do fatorial é: " + fatorial)