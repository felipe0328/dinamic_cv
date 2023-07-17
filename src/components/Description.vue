<template>
  <transition name="description">
    <div v-if="showDescription" class="description-div">
      <h3>
        Software Engineer @ DataArt | Microservices Development, Golang, Python,
        C#
      </h3>
      <div class="description-data">
        <p>
          As a Software Engineer at DataArt, I develop microservices from
          scratch using Go, Python, and C#, integrating AWS cloud services and
          various databases. I also create REST APIs, forum webpages, and Kafka
          events, using TDD and Docker when applicable.
        </p>

        <p>
          I have <b>five years of experience</b> in the software industry,
          working on projects ranging from embedded systems and image processing
          to game development and playable ads. I have a degree in electronic
          engineering from Universidad Industrial de Santander and multiple
          certifications in Docker, Unity, and Go. I am passionate about
          learning, leading, and delivering the best work possible, always
          looking for opportunities to grow.
        </p>
      </div>
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

.description-data {
  margin-left: 20%;
  margin-right: 20%;
}
</style>
