const http = require('http')

const server = http.createServer((req, res) => {
    const response = []
    response['/'] = '<h1> Home </h1>'
    response['/Contatos'] = '<h1> Contatos </h1>'    
    response['404'] = '<h1> 404 - Pagina nao encontrada </h1>'
    res.end(response[req.url] || response['404'])
})

server.listen(3001, 'localhost', () => {
    console.log("Servidor Online")
})