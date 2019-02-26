new Vue({
    el: '#desafio',
    data: {
        nome: "Wesley",
        idade: 29,
        imgGoogle: 'https://www.petz.com.br/blog/wp-content/uploads/2017/07/gato02.jpg'
    },
    methods: {
        idadeMult() {
            return this.idade * 3
        },
        randomico() {
            return Math.random()
        }
    }

})