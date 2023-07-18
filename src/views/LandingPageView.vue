<template>
  <appearing-transition>
    <div v-if="showContent" class="container">
      <img
        alt="Vue logo"
        src="../assets/software-engineer.png"
        class="rounded landing-logo"
      />
    </div>
  </appearing-transition>
</template>

<script>
import AppearingTransition from '@/components/AppearingTransition.vue'

export default {
  props: ['showContent'],
  components: {
    AppearingTransition
  }
}
</script>

<style>
.landing-logo {
  width: 50%;
  margin-left: -20%;
}
</style>
