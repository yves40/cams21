//----------------------------------------------------------------------------
//    allroutes.js
//
//    Jul 17 2021   Initial
//    Jul 18 2021   Module relative path modified
//----------------------------------------------------------------------------
import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue'
import about from '../views/about.vue'
import contact from '../views/contact'

import usersroutes from '../modules/users/vuerouter/usersrouter';

const routes = [
  { path: '/', name: 'home',component: home },
  { path: '/about', name: 'about',component: about },
  { path: '/contact', name: 'contact',component: contact },
]

let router = createRouter( {
  routes: routes,
  history: createWebHistory() 
});

router.addRoute(usersroutes);

export default router
