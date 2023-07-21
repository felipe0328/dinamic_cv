<template>
  <div class="bkg">
    <div class="bkg-border">
      <div>
        <name-header @headerAppearCompleted="headerEnterEnded" />
        <description :showDescription="headerEntryEnded" />
      </div>
      <div class="container mx-0 px-0">
        <div class="row row-cols-1">
          <div class="col-2">
            <vertical-menu :showMenu="headerEntryEnded" />
          </div>
          <div class="col">
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

* {
  margin: 0;
  padding: 0;
  position: relative;
}

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
