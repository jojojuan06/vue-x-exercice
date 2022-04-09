<template>
<div>
    <h1>Mon super compteur</h1>
    <p v-on:click="increment">vous avez cliqué {{total}} fois.</p>
</div>
</template>

<script>
export default {
    name : 'Compteur',
    data(){
        return {
            total: 0
        }
    },
    methods: {
        increment: function() {
            this.total++;
        }
    }
}
</script>

<style scoped>

</style>