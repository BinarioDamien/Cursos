new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: [],
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        },
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(especial) {
            this.hit('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0) {
                this.hit('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
            }
        },
        hit(target, min, max, especial, source, targetName, cls) {
            const plus = especial ? 5 : 0
            const hit = this.getRandom(min + plus, max + plus)
            this[target] = Math.max(this[target] - hit, 0)
            this.registerLog(`${source} atingiu ${targetName} com ${hit}.`, cls)
        },
        healAndHit() {
            this.heal(10, 15)
            this.hit('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`O jogador curou ${heal}`, 'player')
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({text, cls})
        },
    },
watch: {
    hasResult(value) {
        console.log(value)
        if (value) this.running = false
    }
},
})