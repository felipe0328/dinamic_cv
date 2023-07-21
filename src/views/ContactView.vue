<template>
  <appearing-transition appear>
    <div
      v-if="showContent"
      class="container d-flex justify-content-center align-items-center max-width-col"
    >
      <div class="container mx-0 px-0">
        <div class="row d-flex justify-content-sm-center">
          <div
            class="col-2 col-4 col-6 d-flex justify-content-end align-items-center"
          >
            <h6 class="contact-label d-flex align-items-center">
              <fa icon="fa-solid fa-envelope-open" />
              &nbsp; Email
            </h6>
          </div>
          <div class="col-2 col-4 col-6 d-flex align-items-center">
            <div class="link d-flex align-items-center">
              <a
                href="mailto:of28guino@gmail.com"
                target="_blank"
                rel="noreferrer"
                class="contact-a"
              >
                ↗ of28guino@gmail.com</a
              >
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center mt-2">
          <div class="col-2 col-4 col-6 d-flex justify-content-end">
            <h6 class="contact-label d-flex align-items-center">
              <fa icon="fa-solid fa-phone" />
              &nbsp; Phone Number
            </h6>
          </div>
          <div class="col-2 col-4 col-6">
            <div class="link d-flex align-items-center">
              <a
                href="tel:+573112473146"
                target="_blank"
                rel="noreferrer"
                class="contact-a"
                >↗ +57 311 247 31 46</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </appearing-transition>
</template>

<script>
import AppearingTransition from '@/components/AppearingTransition.vue'
export default {
  props: ['showContent'],
  components: {
    AppearingTransition
  }
}
</script>

<style>
.contact-view {
  position: relative;
  margin-left: -10%;
}

.link {
  width: auto;
  margin-bottom: 3px;
  white-space: nowrap;
  margin-left: 5%;
}

.contact-a {
  font-size: 2vmin;
  font-variation-settings: 'wght' 500, 'wdth' 125;
  color: var(--color);
  text-transform: lowercase;
  text-decoration: none;
}

.contact-label {
  text-transform: uppercase;
  font-variation-settings: 'wght' 800, 'wdth' 125;
  font-size: 2.5vmin;
}
</style>
