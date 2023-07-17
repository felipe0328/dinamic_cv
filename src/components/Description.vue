<template>
  <transition name="description">
    <div
      v-if="showDescription"
      class="d-flex justify-content-center text-muted subtitle-header"
    >
      <p>
        <small
          >Software Engineer | Microservices Development, Golang, Python,
          C#</small
        >
      </p>
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

.subtitle-header {
  margin-top: -2%;
}
</style>
