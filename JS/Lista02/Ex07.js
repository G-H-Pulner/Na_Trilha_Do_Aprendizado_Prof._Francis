//Variaveis gerais
var idade, sexo, maiores = 0, menores = 0, verificador = false

//Variaveis do Homem
var homem = 0, homem_velho = 0, homem_novo = 101, homem_maior = 0

//Variaveis da Mulher
var mulher = 0, mulher_velha = 0, mulher_nova = 101, mulher_maior = 0

//Notificação de regras
alert("Para a idade só são aceitos valores numéricos de 100 a 5 \n\nPara o sexo só são aceitos as letras 'M' e 'F' sendo respectivamente Masculino e Feminino")


//Laço principal
for (var cont = 1; cont <= 5; cont++) {

    //Entrada da idade
    idade = parseInt(prompt("Digite a idade da " + cont + "º pessoa: "))

    //Logica da idade
    if (idade <= 100 && idade >= 5) {
        verificador = true

        if (maior_de_idade(idade) == true) {
            maiores++
        } else if (maior_de_idade(idade) == false) {
            menores++
        } else {
            alert("Erro na verificação de idade")
        }

    } else {
        verificador = false
        cont = 6
    }

    //Verificar se deve ou não entrar na parte do sexo
    if (verificador == true) {

        //Entrada do sexo
        sexo = prompt("Digite o sexo da " + cont + "º pessoa: ")


        //Logica do sexo
        if (sexo == "M" || sexo == "F") {
            verificador = true

            if (sexo == "M") {
                homem++
            } else {
                mulher++
            }

        } else {
            verificador = false
            cont = 6
        }
    }

    //Verificar se deve ou não entrar na parte de sexo e idade
    if (verificador == true) {

        //homem mais velho e mais novo
        if (sexo == "M") {

            if (idade >= homem_velho) {
                homem_velho = idade
            } if (idade <= homem_novo) {
                homem_novo = idade
            }

        } else { // mulher mais velha e mais nova

            if (idade >= mulher_velha) {
                mulher_velha = idade
            } if (idade <= mulher_nova) {
                mulher_nova = idade
            }

        }

        //homem maior de idade
        if (sexo == "M") {

            if (maior_de_idade(idade) == true) {
                homem_maior++
            }

        } else {// mulher maior de idade

            if (maior_de_idade(idade) == true) {
                mulher_maior++
            }

        }
    }
}

//Mensagem resposta
if (verificador == true) {

    //Numero de maiores de idade e de sexos
    alert(
        "Tem " + homem + " Homens e " + mulher + " Mulheres\n\nTem " + maiores + " pessoas maiores de idade e " + menores + " menores"
    )

    //Mensagem Homem mais velho, mais novo e quanto são maiores de idade
    if (homem != 0) {
        alert(
            "O homem mais velho tem " + homem_velho + " anos e o mais novo tem " + homem_novo + ", Tem " + homem_maior + " homens maiores de idade"
        )
    } else {
        alert("Não tem nenhum homem no grupo")
    }

    //Mensagem Mulher mais velha, mais nova e quantas são maiores de idade
    if (mulher != 0) {
        alert(
            "A mulher mais velha tem " + mulher_velha + " anos e a mais nova tem " + mulher_nova + ", Tem " + mulher_maior + " mulheres maiores de idade"
        )
    } else {
        alert("Não tem nenhuma mulher no grupo")
    }
} else {
    alert("Você digitou algum valor incorreto, tente novamente")
}


//Função para verificar a marioridade
function maior_de_idade(idade) {
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}