import Vue from 'vue'

export default new Vue({
    methods:{
        selecionarUsuario(objeto){            
            this.$emit('selectUser', objeto)
        },
        quandoSelecionarUsuario(callback){            
            this.$on('selectUser', callback)
        }
    }
})