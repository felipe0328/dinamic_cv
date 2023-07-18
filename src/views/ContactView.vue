<template>
  <appearing-transition appear>
    <div v-if="showContent">
      <p>Contact me</p>
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

<style></style>
