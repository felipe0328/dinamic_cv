<template>
  <appearing-transition appear>
    <div v-if="showContent" class="contact-view">
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h6 class="contact-label">
                  <fa icon="fa-solid fa-envelope-open" />
                  Email
                </h6>
              </td>
              <td>
                <div class="link">
                  <a
                    href="mailto:of28guino@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    class="contact-a"
                  >
                    ↗ of28guino@gmail.com</a
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h6 class="contact-label">
                  <fa icon="fa-solid fa-phone" />
                  Phone Number
                </h6>
              </td>
              <td>
                <div class="link">
                  <a
                    href="tel:+573112473146"
                    target="_blank"
                    rel="noreferrer"
                    class="contact-a"
                    >↗ +57 311 247 31 46</a
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
  font-size: 1.25rem;
  font-variation-settings: 'wght' 500, 'wdth' 125;
  color: var(--color);
  text-transform: lowercase;
  text-decoration: none;
}

.contact-label {
  text-transform: uppercase;
  font-variation-settings: 'wght' 800, 'wdth' 125;
  font-size: 1.25rem;
}
</style>
