//----------------------------------------------------------------------------
//    coreroutes.js
//
//    Aug 23 2021   Initial
//    Aug 27 2021   Reorg views location
//    Aug 28 2021   Properties on notyet, notfound route
//    Sep 02 2021   about has params now
//                  Play with teleport
//    Sep 03 2021   Another teleport sample
//    Jan 09 2022   Insert the components tester vue
//----------------------------------------------------------------------------

/* eslint-disable no-unused-vars */
const Version = "coreroutes.js: Jan 09 2022, 1.08 ";

import notyet from "../views/notyet";
import home from '../views/home.vue'
import about from '../views/about.vue'
import contact from '../views/contact'
import notfound from '../views/notfound'
import aboutyves from '../views/aboutyves'
import notif from '../components/NotificationHandler'
import spopup from '../components/Simplepopup'
import componentstester from '../views/componentstester'


const  coreroutes = 
  [
    { path: "/notyet", name: "notyet", component: notyet, props: true },
    { path: '/', name: 'rootpath',component: home },
    { path: '/home', name: 'home',component: home },
    { path: '/about', name: 'about',component: about, props: true },
    { path: '/aboutyves', name: 'aboutyves',component: aboutyves, props: true },
    { path: '/notif', name: 'notif',component:notif, props: true },
    { path: '/spopup', name: 'spopup',component:spopup, props: true },
    { path: '/contact', name: 'contact',component: contact, props: true },  
    { path: '/componentstester', name: 'componentstester',component: componentstester, props: true },  
    { path: "/:catchAll(.*)",name: 'catch', component: notfound},
  ];

export default coreroutes;
