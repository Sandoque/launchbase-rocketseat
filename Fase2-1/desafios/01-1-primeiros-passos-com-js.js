//Cálculo de IMC
//Crie um programa para calcular o IMC 
//e nível de obesidade de uma pessoa.

//Comece criando constantes para armazenar o nome, 
//peso, altura e sexo de uma pessoa.

const nome = "Carlos";
const peso = 70;
const altura = 1.88;

imc = peso / (altura * altura);
console.log("IMC = " + imc);
console.log();



if (imc >= 30) {
    console.log(nome + " Você está acima do peso");
} else {
    console.log(nome + " você não está acima do peso");
    }