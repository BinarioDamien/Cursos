// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro Default
function log(texto = 'Parametro Texto Default'){
    console.log(texto)
}
log()
log("Parametro Texto Alterado")

function total (...numeros){
    let total = 0
    numeros.forEach(element => total += element)
    return total
}

console.log(total(2,3,4,5))
