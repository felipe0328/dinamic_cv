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
    </div>
  </div>
</template>

<script>
import NameHeader from './components/NameHeader.vue'
import Description from './components/Description.vue'
export default {
  data() {
    return {
      headerEntryEnded: false
    }
  },
  components: {
    NameHeader,
    Description
  },
  methods: {
    headerEnterEnded() {
      this.headerEntryEnded = true
    }
  }
}
</script>

<style lang="scss">
body {
  height: 100%;
  margin: 0;
}

.bkg {
  position: fixed;
  margin: 0;
  background-color: gray;
  height: 100vh;
}

.bkg-border {
  margin: 5%;
  height: 90%;
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

@import 'node_modules/bootstrap/scss/bootstrap';
</style>
