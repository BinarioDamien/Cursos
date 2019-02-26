export const getNome = state => state.nome
export const getNomeCompleto = state => state.nome + state.sobrenome

// Para Testar
// console.log(this.$store.getters.getNome)
// console.log(this.$store.getters.getNomeCompleto)