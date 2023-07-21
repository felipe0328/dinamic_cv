<template>
  <appearing-transition appear>
    <div
      v-if="showContent"
      class="container d-flex justify-content-center max-width-col"
    >
      <img
        alt="Vue logo"
        src="../assets/software-engineer.png"
        class="rounded img-circle mx-auto"
        width="640"
        height="220"
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

<style></style>
