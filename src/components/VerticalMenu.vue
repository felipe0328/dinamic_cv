<template>
  <appearing-transition>
    <div class="container px-2 mx-0" v-if="showMenu">
      <div class="row hover-effect">
        <router-link to="/" class="btn-vertical-menu">Home</router-link>
      </div>
      <div class="row hover-effect">
        <router-link to="/about-me" class="btn-vertical-menu"
          >About Me</router-link
        >
      </div>
      <div class="row hover-effect">
        <router-link to="/experience" class="btn-vertical-menu"
          >Experience</router-link
        >
      </div>
      <div class="row hover-effect">
        <router-link to="/projects" class="btn-vertical-menu"
          >Projects</router-link
        >
      </div>
      <div class="row hover-effect">
        <router-link to="/contact-me" class="btn-vertical-menu"
          >Contact</router-link
        >
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
  font-weight: bold;
}

.btn-vertical-menu {
  text-decoration: none;
  color: inherit;
  font-size: 2vmin;
}
</style>
