//alert("Olá")
//confirm("Olá")
//prompt("Olá")

var temp, fah, kel

temp = parseFloat(prompt("Olá, por favor, digite a temperatura a ser convertida: "))

fah = (temp * 1.8) + 32
kel = temp + 273.15

alert("A temperatura de Celsius para Fahrenheit é: " + fah)
alert("A temperatura de Celsius para Kelvin é: " + kel)