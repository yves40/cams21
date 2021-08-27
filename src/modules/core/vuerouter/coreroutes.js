//----------------------------------------------------------------------------
//    coreroutes.js
//
//    Aug 23 2021   Initial
//    Aug 27 2021   Reorg views location
//----------------------------------------------------------------------------

/* eslint-disable no-unused-vars */
const Version = "coreroutes.js: Aug 27 2021, 1.02 ";

import notyet from "../views/notyet";
import home from '../views/home.vue'
import about from '../views/about.vue'
import contact from '../views/contact'


const  coreroutes = 
  [
    { path: "/notyet", name: "notyet", component: notyet },
    { path: '/', name: 'home',component: home },
    { path: '/about', name: 'about',component: about },
    { path: '/contact', name: 'contact',component: contact },  
  ];
export default coreroutes;
