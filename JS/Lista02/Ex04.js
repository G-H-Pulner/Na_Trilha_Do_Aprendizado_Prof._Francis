function calcular() {
    var max, cont1 = 0, cont2 = 0, cont3 = 0

    max = parseInt(document.getElementById("n1").value)

    for (var cont = 1; cont <= max; cont++) {
        if (cont == 1) {
            cont3 = 1
            cont1 = cont2
            cont2 = cont3
        } else {
            cont3 = cont2 + cont1
            cont1 = cont2
            cont2 = cont3
        }
    }

    document.getElementById("resultado").innerHTML = `${cont3}`
}