<template>
  <appearing-transition>
    <div
      class="container position-absolute top-50 translate-middle-y"
      v-if="showMenu"
    >
      <div class="row hover-effect">
        <a>About Me</a>
      </div>
      <div class="row hover-effect">
        <a>Projects</a>
      </div>
      <div class="row hover-effect">
        <a>Option 3</a>
      </div>
      <div class="row hover-effect">
        <a>Contact</a>
      </div>
    </div>
  </appearing-transition>
</template>

<script>
import AppearingTransition from './AppearingTransition.vue'

export default {
  props: ['showMenu'],
  components: {
    AppearingTransition
  }
}
</script>

<style>
.hover-effect:hover {
  margin-left: 20%;
  transform: scale(1.5);
}
</style>
