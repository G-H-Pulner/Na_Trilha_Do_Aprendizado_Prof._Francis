var primeiro, termos, razao, progressao = []

primeiro = parseFloat(prompt("Digite o primeiro termo da progressão: "))
razao = parseFloat(prompt("Digite a razão para a progressão: "))
termos = parseInt(prompt("Digite a quantidade de termos desejados para a progressão: "))

progressao[0] = primeiro

for (var cont = 1, conta = 0; cont < termos; cont++) {
    conta = progressao[cont - 1] * razao
    progressao.push(parseFloat(conta))
}

alert("A progressão resultante foi: " + progressao)