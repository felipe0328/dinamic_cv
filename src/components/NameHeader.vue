<template>
  <transition appear appear-active-class="pntransition-transition">
    <div class="profile-name">
      <h1 class="name-text">Oscar Felipe Puentes Sanguino</h1>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.profile-name {
  position: relative;
  margin: auto;
  width: 100vw;
  font-size: 1.5em;
}

.pntransition-transition {
  animation: appear-name 2s;
  animation-timing-function: ease-in-out;
}

@keyframes appear-name {
  0% {
    opacity: 0;
    transform: translateY(calc(40vh));
  }
  30% {
    opacity: 1;
    transform: translateY(calc(40vh));
  }
  80% {
    transform: translate(0);
  }
}
</style>
