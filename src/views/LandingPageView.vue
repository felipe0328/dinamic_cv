<template>
  <appearing-transition>
    <div v-if="showContent">
      <img
        alt="Vue logo"
        src="../assets/code10.png"
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
  width: 30%;
  height: 30%;
}
</style>
