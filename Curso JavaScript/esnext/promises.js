const http = require('http')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res =>{
            let resultado = ''
            
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })    
}

let nomes = []
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(turmas => turmas.map(aluno => aluno.nome))
    .then(result => console.log(result))