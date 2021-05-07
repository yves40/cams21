//import Vue from "Vue";
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'Home',component: Home },
  { path: '/about', name: 'About',component: About },
]

//Vue.use(Router);
let router = createRouter( {
  routes: routes,
  history: createWebHistory() 
});

export default router
