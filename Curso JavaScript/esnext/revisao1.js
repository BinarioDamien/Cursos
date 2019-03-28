// let e const
console.log("Let e Const")
{
    var a = 2
    let b = 3
    console.log("Dentro do Bloco | var a =>", a)
    console.log("Dentro do Bloco | let b =>", b)
}
console.log("Fora do Bloco | var a =>", a)
console.log("Fora do Bloco | let b => 'Não Funciona'")
//console.log("Fora do Bloco | let b =>", b)
console.log(" ")

// Template String
console.log(`Template String`)
const produto = 'iPad'
console.log(`O
${produto}
    é
    muito
        caro`)

        console.log(" ")
// Destructuring
console.log("Destructuring String")
const [l, e, ...tras] = "Wesley"
console.log(l,e,tras)

console.log(" ")
console.log("Destructuring Array")
const [x1,y1] = [1,2,3]
console.log(x1,y1)
const [x2, ,y2] = [1,2,3]
console.log(x2,y2)

console.log(" ")
console.log("Destructuring Object")
const { idade: i, nome} = {nome: "Wesley", idade: 29}
console.log(nome + " tem " + i + " anos")


