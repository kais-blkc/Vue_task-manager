import './assets/css/style.css'

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrashArrowUp, faCirclePlus, faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

library.add(faTrashArrowUp, faCirclePlus, faPenToSquare, faCheck)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
