<template>
  <transition
    appear
    appear-active-class="pntransition-transition"
    @after-appear="this.$emit('headerAppearCompleted')"
  >
    <div class="d-flex justify-content-center mt-3">
      <h1 class="name-text header-title">Oscar Felipe Puentes Sanguino</h1>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ['headerAppearCompleted'],
  methods: {
    test() {
      console.log('oli')
    }
  }
}
</script>

<style>
.header-title {
  text-align: center;
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

.name-text {
  font-family: 'AestheticRomance';
  color: rgb(0, 0, 0);
}
</style>
