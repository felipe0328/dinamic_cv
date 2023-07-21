<template>
  <appearing-transition>
    <div
      v-if="showDescription"
      class="d-flex justify-content-center text-muted"
    >
      <p class="subtitle-header">
        <small
          >Software Engineer | Microservices Development, Golang, Python,
          C#</small
        >
      </p>
    </div>
  </appearing-transition>
</template>

<script>
import AppearingTransition from './AppearingTransition.vue'

export default {
  props: ['showDescription'],
  components: { AppearingTransition },
  data() {
    return {}
  }
}
</script>

<style>
.subtitle-header {
  text-align: center;
}
</style>
