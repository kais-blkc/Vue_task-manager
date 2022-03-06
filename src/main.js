import './assets/css/style.css'

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrashArrowUp, faCirclePlus, faPenToSquare, faCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

library.add(faTrashArrowUp, faCirclePlus, faPenToSquare, faCheck, faSquareCheck)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
