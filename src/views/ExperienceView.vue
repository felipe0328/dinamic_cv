<template>
  <appearing-transition appear>
    <div
      v-if="showContent"
      class="container d-flex justify-content-center align-items-center max-width-col"
    >
      <p>Experience</p>
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
