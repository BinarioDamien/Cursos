new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
        exibirAlerta() {
            alert("Alerta")
        },
        inputPressedEnter(e) {
            this.valor2 = e.target.value
        }
    }
})