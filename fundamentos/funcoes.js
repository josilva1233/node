/**
 * Tutorial Node.js
 * Funções
 */

//exemplo 1
function hello()
{
   console.log("Hello Function")
}

hello()
console.log(typeof hello)

//exemplo 2
const hello2 = function()
{
  console.log("Hello Function Assigned")
}

hello2()
console.log(typeof hello2)

//exemplo 3
const hello3 = () => {
    console.log("Hello Arrow Function Assigned")
}

hello3()
console.log(typeof hello3)

//exemplo 4
const hello4 = _=> console.log("Hello Arrow Function Assigned simplefied")

hello4()
console.log(typeof hello4)

//função de somar simples
function somarS (num1, num2)
{
 return (console.log(num1 + num2))
}
somarS(2,3)
console.log("")

let somarA = function (num1, num2)
{
  return (console.log(num1 + num2))
} 
somarA(1,3)
console.log(typeof somarA)
console.log("")

let somarAF = (num1, num2 ) => 
{
  return (console.log(num1 + num2))
}
somarAF(8,3)
console.log(typeof somarAF)
console.log("")

let somarAFS = (num1, num2 ) => (console.log(num1 + num2))
somarAFS(8,12)
console.log(typeof somarAFS)