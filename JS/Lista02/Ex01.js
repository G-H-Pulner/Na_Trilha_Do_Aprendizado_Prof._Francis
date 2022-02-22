function resultado() {
    var temp, fah, kel

    temp = parseFloat(document.getElementById("n1").value)

    fah = (temp * 1.8) + 32
    kel = temp + 273.15

    document.getElementById("resultado1").innerHTML = `A temperatura de Celsius para Fahrenheit é: ${fah}`

    document.getElementById("resultado2").innerHTML = `A temperatura de Celsius para Kelvin é: ${kel}`
}