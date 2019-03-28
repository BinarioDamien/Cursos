const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: false},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(product){
    return product.preco > 1000
}))

const isCaro = product => product.preco >= 500
const isFragil = product => product.fragil

console.log(produtos.filter(isCaro).filter(isFragil))