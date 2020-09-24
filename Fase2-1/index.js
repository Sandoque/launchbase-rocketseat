// Criar um programa calcula a média
// das notas entre os alunos e envia
//mensagem do cálculo da média

const { type } = require("os")

const Aluno01 = 'Antônio carlos'
const notaAluno01 = 9.8

const Aluno02 = "Eduardo"
const notaAluno02 = 10

const Aluno03 = "Filano"
const notaAluno03 = 2


const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


// se a média for maior que 5, parabenize a turma
if (media > 5) {
    console.log(`A média foi de ${media}. parabéns`)
} else {
    console.log('A média é menor que 5')
}
