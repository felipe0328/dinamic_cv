<template>
  <transition name="appearing-transition">
    <slot></slot>
  </transition>
</template>

<script>
export default {}
</script>

<style>
.appearing-transition-enter-from {
  opacity: 0;
}

.appearing-transition-enter-to {
  transition: all 0.5s ease-in;
}
</style>
