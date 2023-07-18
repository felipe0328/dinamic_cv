<template>
  <transition name="menu-transition">
    <div
      class="container position-absolute top-50 translate-middle-y"
      v-if="showMenu"
    >
      <div class="row hover-effect">
        <p>Option 1</p>
      </div>
      <div class="row hover-effect">
        <p>Option 2</p>
      </div>
      <div class="row hover-effect">
        <p>Option 3</p>
      </div>
      <div class="row hover-effect">
        <p>Option 4</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['showMenu']
}
</script>

<style>
.hover-effect:hover {
  margin-left: 20%;
  transform: scale(1.5);
}

.menu-transition-enter-from {
  opacity: 0;
}

.menu-transition-enter-to {
  transition: all 0.5s ease-in;
}
</style>
