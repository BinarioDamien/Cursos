// Spread com Objetos

const funcionario = { nome: "Wesley", salario: 12500}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// Spread com Array
const grupoA = ["Wesley", "Thais", "Murky"]
const grupoB = ["Angela", "Yan", "Euzinio"]
const grupoAB = [...grupoA, ...grupoB]
console.log(grupoAB)