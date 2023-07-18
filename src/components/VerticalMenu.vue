<template>
  <appearing-transition>
    <div
      class="container position-absolute top-50 translate-middle-y"
      v-if="showMenu"
    >
      <div class="row hover-effect">
        <a href="/" class="btn-vertical-menu">Home</a>
      </div>
      <div class="row hover-effect">
        <a href="/about-me" class="btn-vertical-menu">About Me</a>
      </div>
      <div class="row hover-effect">
        <a class="btn-vertical-menu">Projects</a>
      </div>
      <div class="row hover-effect">
        <a class="btn-vertical-menu">Contact</a>
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

.btn-vertical-menu {
  text-decoration: none;
  color: inherit;
}
</style>
