// ES8: Object.values & Object.entries
const obj = { a:1, b:2, c:3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = "Thais"
const pessoa = {
    nome,
    ola(){
        return "Mandou Oi!"
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal{
    IncomodarMeusEstudos(){
        return "Cachorro Latindo feito louco!"
    }
}
console.log(new Cachorro().IncomodarMeusEstudos())