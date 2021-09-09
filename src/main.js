/*----------------------------------------------------------------------------
    Jul 18 2021   Initial
    Sep 09 2021   AppLink component ( used to route vue or html requests)
----------------------------------------------------------------------------*/
import { createApp } from 'vue'
import App from './App.vue'

import routes from './vue-router/allroutes'
import store from './store/allstore'
import AppLink from './modules/core/components/AppLink'

//import './css/thecss.css'
import './css/main.css'

const app = createApp(App);


app.component('AppLink', AppLink);
app.use(routes);
app.use(store);
app.mount('#app');

