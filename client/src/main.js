import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' //npm install bootstrap jquery popper.js 
import '@fortawesome/fontawesome-free/css/all.css' //$ npm install --save-dev @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/js/all.js'
createApp(App).use(store).use(router).mount('#app')
