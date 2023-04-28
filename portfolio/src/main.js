import { createApp } from 'vue'

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

//Styling (tailwind/css)
import './index.css'
import App from './App.vue'


library.add(faGithub, faLinkedin);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')