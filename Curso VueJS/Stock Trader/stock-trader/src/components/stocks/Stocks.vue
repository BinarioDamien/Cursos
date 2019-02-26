<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
import Stock from './Stock'
export default {
    components: {
        Stock,
    },
    data(){
        return{
            stocks:[
                {id: 1, name: 'Spotify', price: 110 },
                {id: 2, name: 'Twitter', price: 10 },
                {id: 3, name: 'Google', price: 310 },
                {id: 4, name: 'Microsoft', price: 320 },
                {id: 5, name: 'Apple', price: 300 },
            ]            
        }
    }
}
</script>

<style>

</style>
