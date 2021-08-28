//----------------------------------------------------------------------------
//    coreroutes.js
//
//    Aug 23 2021   Initial
//    Aug 27 2021   Reorg views location
//    Aug 28 2021   Properties on notyet, notfound route
//----------------------------------------------------------------------------

/* eslint-disable no-unused-vars */
const Version = "coreroutes.js: Aug 28 2021, 1.05 ";

import notyet from "../views/notyet";
import home from '../views/home.vue'
import about from '../views/about.vue'
import contact from '../views/contact'
import notfound from '../views/notfound'


const  coreroutes = 
  [
    { path: "/notyet", name: "notyet", component: notyet, props: true },
    { path: '/', name: 'rootpath',component: home },
    { path: '/home', name: 'home',component: home },
    { path: '/about', name: 'about',component: about },
    { path: '/contact', name: 'contact',component: contact },  
    { path: "/:catchAll(.*)",name: 'catch', component: notfound},
  ];

export default coreroutes;
