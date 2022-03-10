import './assets/css/style.css'

import App from './App.vue'
import store from './store'
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrashArrowUp, faCirclePlus, faPenToSquare, faCheck, faSquareCheck, faArrowDown19, faArrowDown91 } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashArrowUp, faCirclePlus, faPenToSquare, faCheck, faSquareCheck, faArrowDown19, faArrowDown91)

createApp(App)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
