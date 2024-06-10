/**
 * Tutorial Node.js
 * Tipagem dinânmica
 */

console.log ("________________ Strings")
let nome = "Josias Silva"
console.log(typeof(nome))
console.log(nome)
console.log(nome.replace("Josias", "Jo"))
console.log(nome.replace("Dev PHP" + nome))
console.log(`Josias: ${nome}`)
console.log ("________________ Number")
let peso = 77
let altura = 1.67
console.log(typeof(peso))
console.log(typeof(altura))
console.log ("________________ Boleanos")
let sw = true
console.log(`Chave: ${sw}`)
let lamp = !1
console.log(typeof(lamp))
console.log(`Lampada: ${lamp}`)
console.log(sw && "Lâmpada acesa")
