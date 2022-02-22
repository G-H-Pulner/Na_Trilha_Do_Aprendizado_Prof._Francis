function calcular() {
    var primeiro, termos, razao, progressao = []

    primeiro = parseFloat(document.getElementById("termo1").value)

    razao = parseFloat(document.getElementById("razao").value)

    termos = parseInt(document.getElementById("quantidade_termos").value)

    progressao[0] = primeiro

    for (var cont = 1, conta = 0; cont < termos; cont++) {
        conta = progressao[cont - 1] * razao
        progressao.push(parseFloat(conta))
    }

    document.getElementById("resultado").innerHTML = `A progressão resultante foi: ${progressao}`
}