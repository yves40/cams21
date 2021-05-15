import { createApp } from 'vue'
import App from './App.vue'

import routes from "./router/allroutes"
import store from './store/allstore'

//import './css/thecss.css'
import './css/main.css'

const app = createApp(App);
app.use(routes);
app.use(store);
app.mount('#app');

