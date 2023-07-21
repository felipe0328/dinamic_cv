<template>
  <div class="bkg">
    <div class="bkg-border">
      <div>
        <name-header @headerAppearCompleted="headerEnterEnded" />
        <description :showDescription="headerEntryEnded" />
      </div>

      <div class="container-fluid px-0">
        <div class="row d-flex justify-content-start">
          <div class="col d-flex align-self-start vertical-menu">
            <vertical-menu :showMenu="headerEntryEnded" />
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col max-width-col">
            <router-view :showContent="headerEntryEnded" />
          </div>
        </div>
      </div>

      <websites />
    </div>
  </div>
</template>

<script>
import NameHeader from './components/NameHeader.vue'
import Description from './components/Description.vue'
import Websites from './components/Websites.vue'
import VerticalMenu from './components/VerticalMenu.vue'

export default {
  data() {
    return {
      headerEntryEnded: false
    }
  },
  created() {
    document.title = 'Oscar Puentes CV'
  },
  components: {
    NameHeader,
    Description,
    VerticalMenu,
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

.vertical-menu {
  display: flex;
  align-items: flex-start;
}

.bkg {
  position: fixed;
  margin: 0;
  background-color: gray;
  height: 100vh;
  width: 100vw;
}

.bkg-border {
  position: relative;
  margin-top: 5vh;
  margin-left: 5vw;
  height: 90vh;
  width: 90vw;
  border-style: solid;
}

.max-width-col {
  position: relative;
  width: 100%;
  height: 55vh;
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
