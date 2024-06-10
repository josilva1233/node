/**
 * Tutorial Node.js
 * Entrada de dados via terminal
 * Aplicativo IMC
 */

const colors = require('colors')
const read = require('readline-sync')

console.clear()
console.log('___ __  __  ___ ')
console.log('|_ _|  \\/  |/ __|')
console.log(' | || |\\/| | (__ ')
console.log('|___|_|  |_|\\___|')
console.log("")
let nome = read.question("Digite o seu nome: ")
let idade = read.question("Digite sua idade: ")
let peso = Number(read.question("Digite seu peso (kg): ").replace("," , "."))
let altura = Number(read.question("Digite sua altura (m): ").replace("," , "."))
let imc = peso / (altura * altura)
console.log("")
console.log("__________________________")
console.log("Ficha do Aluno".italic.bold)
console.log(`Nome:  ${nome}`)
console.log(`Idade:  ${idade}`)
console.log(`Peso:  ${peso}`)
console.log(`Altura:  ${altura}`)
console.log(`IMC:  ${imc.toFixed(2)}`)

if(imc < 18.5){
    console.log('Magreza' .red)
}else if(imc < 25){
    console.log('Normal'.blue)
}else if(imc < 30){
    console.log('Sobrepeso'.random)
}else if(imc > 40){
    console.log('Obesidade'.red)
}
console.log("")
console.log("__________________________")


