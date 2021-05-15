//import Vue from "Vue";
import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue'
import about from '../views/about.vue'

const routes = [
  { path: '/', name: 'home',component: home },
  { path: '/about', name: 'about',component: about },
]

//Vue.use(Router);
let router = createRouter( {
  routes: routes,
  history: createWebHistory() 
});

export default router
