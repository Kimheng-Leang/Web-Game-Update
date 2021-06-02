import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' //npm install bootstrap jquery popper.js 
import '@fortawesome/fontawesome-free/css/all.css' //$ npm install --save-dev @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/js/all.js'

//to import video in vue 
import Embed from "v-video-embed"; /* npm install v-video-embed */

createApp(App).use(store).use(router).mount('#app')
