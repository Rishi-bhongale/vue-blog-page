import { createApp } from 'vue'
import App from './App.vue'



import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCartShopping, faCircleXmark, faComment, faLink, faMessage, faShare, faShareNodes, faToggleOff, faToggleOn, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faWhatsapp, faCartShopping, faTwitter, faFacebook, faLinkedin, faComment, faLink, faShareNodes,
 faShare, faMessage, faCircleXmark, faToggleOff, faToggleOn )



createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
