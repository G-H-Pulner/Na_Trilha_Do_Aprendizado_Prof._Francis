var moeda, valor

moeda = confirm("Pressione o 'OK' para selecionar a conversão de real para dólar\nPressione o 'Cancelar' para selecionar a conversão de dólar para real")

if (moeda == true) {
    alert("Você selecionou a conversão de real para dólar")
    valor = entrada() / 5.43
    alert("O valor convertido é: " + valor + "$")
} else {
    alert("Você selecionou a conversão de dólar para real")
    valor = entrada() * 5.43
    alert("O valor convertido é: " + valor + "R$")
}

function entrada() {
    var valor
    valor = parseFloat(prompt("Digite o valor: "))
    return valor
}