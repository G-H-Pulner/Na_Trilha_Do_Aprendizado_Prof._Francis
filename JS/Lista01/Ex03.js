var media = 0.0, nota

for (var cont = 1; cont <= 4; cont++) {
    nota = parseFloat(prompt("Digite a nota em decimal no " + cont + "º Bimestre do aluno: "))

    if (nota <= 10 && nota >= 0) {
        media = media + nota
    } else {
        media = "Error"
        cont = 5
    }
}

media = media / 4

if (media != "Error") {
    if (media <= 10 && media >= 9) {
        alert("A media do aluno é " + media + " e foi com A")
    } else if (media <= 8.9 && media >= 8) {
        alert("A media do aluno é " + media + " e foi com B")
    } else if (media <= 7.9 && media >= 7) {
        alert("A media do aluno é " + media + " e foi com C")
    } else if (media <= 6.9 && media >= 0) {
        alert("A media do aluno é " + media + " e foi com D")
    } else {
        alert("ERROR")
    }
} else {
    alert("ERROR")
}