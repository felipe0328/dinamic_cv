<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <div class="bkg">
    <name-header @headerAppearCompleted="headerEnterEnded" />
    <description :showDescription="headerEntryEnded" />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

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
