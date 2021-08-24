//----------------------------------------------------------------------------
//    allroutes.js
//
//    Jul 17 2021   Initial
//    Jul 18 2021   Module relative path modified
//    Aug 23 2021   Noyet
//    Aug 24 2021   Noyet, fix the wrong usage of addRoute
//----------------------------------------------------------------------------
// eslint-disable-next-line no-unused-vars
const Version = "allroutes.js: Aug 24 2021, 1.05 ";


import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue'
import about from '../views/about.vue'
import contact from '../views/contact'

import usersroutes from '../modules/users/vuerouter/usersrouter';
import coreroutes from '../modules/core/vuerouter/coreroutes'

let routes = [
  { path: '/', name: 'home',component: home },
  { path: '/about', name: 'about',component: about },
  { path: '/contact', name: 'contact',component: contact },
]

let moreroutes = routes.concat(usersroutes);
console.log("*** Added users routes : " + moreroutes.length)
routes = moreroutes.concat(coreroutes);
console.log("*** Added core routes : " + routes.length)

let router = createRouter( {
  routes: routes,
  history: createWebHistory() 
});

let theroutes = router.getRoutes();
console.log("*** Number of registered vue routes :" + theroutes.length);
theroutes.forEach(element => {
  console.log("path:" + element.path + " name:" + element.name);
});

export default router
