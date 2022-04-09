<template>
  <div class="about">
    <Compteur/>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Compteur from '@/components/Compteur.vue'

export default {
  name: 'About',
  components: {
    Compteur
  }
}
</script>
