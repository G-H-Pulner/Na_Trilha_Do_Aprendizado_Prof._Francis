function Real_Dolar() {

    var valor = parseFloat(document.getElementById("n1").value)

    valor = valor / 5.43

    document.getElementById("resultado").innerHTML = `O valor convertido é: ${valor} $`
}

function Dolar_Real() {

    var valor = parseFloat(document.getElementById("n1").value)

    valor = valor * 5.43

    document.getElementById("resultado").innerHTML = `O valor convertido é: ${valor} R$`
}