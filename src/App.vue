<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <div class="bkg">
    <div class="bkg-border">
      <name-header @headerAppearCompleted="headerEnterEnded" />
      <description :showDescription="headerEntryEnded" />
      <websites />
    </div>
  </div>
</template>

<script>
import NameHeader from './components/NameHeader.vue'
import Description from './components/Description.vue'
import Websites from './components/Websites.vue'

export default {
  data() {
    return {
      headerEntryEnded: false
    }
  },
  components: {
    NameHeader,
    Description,
    Websites
  },
  methods: {
    headerEnterEnded() {
      this.headerEntryEnded = true
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';

.bkg {
  position: fixed;
  margin: 0;
  background-color: gray;
  height: 100vh;
  width: 100vw;
}

.bkg-border {
  position: absolute;
  margin-top: 5vh;
  margin-left: 5vw;
  height: 90vh;
  width: 90vw;
  border-style: solid;
}

@font-face {
  font-family: 'Xtradex';
  src: local('Xtradex'), url('./fonts/Xtradex.ttf') format('truetype');
}

@font-face {
  font-family: 'AestheticRomance';
  src: local('AestheticRomance'),
    url('./fonts/AestheticRomance.ttf') format('truetype');
}
</style>
