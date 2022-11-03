// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = prompt("Qual a altura do retângulo?")
  let largura = prompt("Qual a largura do triângulo?")
  console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
let anoAtual = prompt("Qual o ano atual?")
const anoNascimento = prompt("Qual o ano do seu nascimento?")
let IDADE = anoAtual - anoNascimento
console.log(IDADE)
};

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
let IMC = peso / ( altura * altura)
return IMC
}
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual o seu nome?")
  let IDADE = prompt("Qual a sua idade?")
  let email= prompt("Qual o seu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${IDADE} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 =prompt("Informe sua cor favorita:")
  let cor2 =prompt("Informe mais uma cor:")
  let cor3 =prompt("Informe uma outra cor:")
  let cores = [cor1,cor2,cor3]
  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase();
  return stringMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let semPrejuizo = custo / valorIngresso
  return semPrejuizo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiroElemento = array.shift()
  let ultimoElemento = array.pop()
  array.push(primeiroElemento)
  array.unshift(ultimoElemento)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt("Qual o ano atual?")
  const anoNascimento = prompt("Qual o ano do seu nascimento?")
  const anoEmicaoIdentidade = prompt("Qual o ano de emissão da sua identidade?")

}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let anoBissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let maiorIdade = prompt("Você tem mais de 18 anos?")
  let escolaridade = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let inscricaoValida = maiorIdade == "sim" && escolaridade == "sim" && disponibilidade == "sim"
  console.log(inscricaoValida)
}