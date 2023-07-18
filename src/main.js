import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faSquareGithub, faLinkedin, faEnvelopeOpen, faPhone)

createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app')
