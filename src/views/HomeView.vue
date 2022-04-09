<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Compteur/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Compteur from '@/components/Compteur.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Compteur
  }
}
</script>
