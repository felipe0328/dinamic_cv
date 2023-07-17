<template>
  <transition name="description">
    <div v-if="showDescription">
      <p>Software engineer with 5 years of experience</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['showDescription'],
  data() {
    return {}
  }
}
</script>

<style>
.description-enter-from {
  opacity: 0;
}

.description-enter-to {
  transition: all 0.5s ease-in;
}
</style>
