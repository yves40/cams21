<!-- 

  Jan 01 2021   Initial
  Aug 28 2021   Work on router-link entry parameters
  Aug 29 2021   Test other routes options ( about, contacts)
  Sep 02 2021   About page has params 
  Sep 03 2021   New teleport sample : Test popup messages
  Sep 07 2021   Sub menu spacing for small screen
  Sep 09 2021   1 st test with parametered menu entries

-->

<template>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"/>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
    </head>
    <body>
        <!-- ------------------------------------------------------------------- -->
        <nav>
          <div class="menu-icons">
            <i class="fa fa-times" v-on:click="hideMenu" v-bind:style="{ display: state.displayt }"></i>
            <i class="fa fa-bars" v-on:click="showMenu" v-bind:style="{ display: state.displayb }"></i>
          </div>
          <!-- ------------------------------------------------------------------- -->
          <div id="navLinks">
            <ul class="nav-list"  v-bind:style="{ right: state.right }">
              <li><AppLink :to="{name: 'home'}" v-on:click="hideMenu">Home</AppLink></li>
              <li><a href="#">Sandbox<i class="fas fa-arrow-down"></i></a>
              <!-- ------------------------------------------------------------------- -->
              <ul class="sub-menu">
                  <li><a target="_blank" href="html-css/University/index.html">University</a></li>
                  <li><a href="#">Popup Tests <i class="fas fa-arrow-right"></i></a>
                  <!-- ------------------------------------------------------------------- -->
                  <ul class="sub-menu">
                      <li><router-link :to="{name: 'aboutyves' }" v-on:click="hideMenu">About Yves</router-link></li>            
                      <li><router-link :to="{name: 'notif' }" v-on:click="hideMenu">Notification</router-link></li>              
                      <li><router-link :to="{name: 'spopup' }" v-on:click="hideMenu">Popup</router-link></li>                      
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Users <i class="fas fa-arrow-down"></i></a>
                <!-- ------------------------------------------------------------------- -->
                <ul class="sub-menu">
                  <li><a href="#">One <i class="fas fa-arrow-right"></i></a>
                    <!-- ------------------------------------------------------------------- -->
                    <ul class="sub-menu">
                      <li><router-link :to="{name: 'notyet', params: {from: 'Four', message: 'Four is a stork is not a working feature right now'} }"
                         v-on:click="hideMenu">Four is a stork</router-link></li>
                      <li><a href="#">Six is a pig</a></li>
                      <li><a href="#">Seven is a hen</a></li>
                      <li><a href="#">Eight</a></li>
                    </ul>
                  </li>
                  <li><router-link :to="{ name: 'notyet', params: {
                                                            from: 'Two', 
                                                            message: 'Two will be available in September',
                                                            ok: 'Home',
                                                            okroute: 'home',
                                                            cancel: 'About',
                                                            cancelroute: 'about',
                                                            back: 'Contacts',
                                                            backroute: 'contact' 
                                                          }}"
                       v-on:click="hideMenu">Two</router-link></li>
                  <li><a href="#">Three</a></li>
                </ul>
              </li>
              <li><AppLink to="http://www.heden.fr/" >Heden</AppLink></li>
              <li><AppLink to="https://www.foscam-france.fr/" >Foscam</AppLink></li>
              <li><router-link :to="{name: 'contact', params: {
                      ok:'Home',
                      okroute: 'home',
                    }}" 
              v-on:click="hideMenu">Contacts</router-link></li>
              <li><router-link :to="{name: 'about' , params: {
                      ok:'Home',
                      okroute: 'home',
                    }}" v-on:click="hideMenu">About</router-link></li>      
              <!-------------------------------------------------------------------------------------------
                Parametered menu 
              --------------------------------------------------------------------------------------------> 
              <span v-for="entry in topmenu" :key="entry.id">
                <li v-show="entry.enableflag"><AppLink :to="{name: entry.url}" v-on:click="hideMenu">
                                              {{entry.text}}
                                              <span v-if="entry.submenu"><i class="fas fa-arrow-down"></i></span>
                                              </AppLink>
                    <ul v-if="entry.submenu" class="sub-menu">
                      <span v-for="subentry in entry.submenuentries" :key="subentry.id">
                        <li v-if="subentry.isvue" v-show="subentry.enableflag">
                              <AppLink :to="{name: subentry.url}" v-on:click="hideMenu">
                                                {{subentry.text}}
                              </AppLink>
                        </li>
                        <li v-if="!subentry.isvue" v-show="subentry.enableflag">
                            <a target="_blank" href={{subentry.url}}>{{subentry.text}}</a>
                        </li>
                      </span>
                    </ul>
                </li>
              </span>
            </ul>
          </div>
          <p></p>
        </nav>
    </body>
  </html>
</template>

<script>

/* eslint-disable no-unused-vars */

import { reactive } from 'vue';
export default {
  setup() {
    const Version = "topmenu 1.31: Sep 08 2021";
    let state = reactive ( {
      right: '-200px',
      displayt: 'none',
      displayb: 'flex'
    });
    const topmenu =  [
        {
          text: "Home",
          enableflag: true,
          submenu: false,
          url: "home",
        },
        {
          text: "Sandbox",
          enableflag: true,
          submenu: true,
          submenuentries: [
            { isvue: false,  url: "html-css/University/index.html", params: {}, text: "University", enableflag: true, disableflag: false, },
          ]
        },
        {
          text: "Users",
          enableflag: true,
          submenu: true,
          submenuentries: [
            { isvue: true, url: "login", params: {}, text: "Login", enableflag: true, disableflag: false, },
            { isvue: true, url: "logout",params: {},text: "Logout", enableflag: false, disableflag: false,},
            { isvue: true, url: "register", params: { mode: 'STD'},text: "Register", enableflag: true, disableflag: false, },
            { isvue: true, url: "identity",params: {},text: "Identity", enableflag: false, disableflag: false, },
            { isvue: true, url: "edit",params: { mode: 'STD'},text: "My profile", enableflag: false, disableflag: false, },
            { isvue: true, url: "deleteme",params: {},text: "Delete ME!", enableflag: false, disableflag: false, },
          ]
        },
        {
          text: "Contacts",
          submenu: false,
          enableflag: true,
          isvue: true, 
          url: "contact",
        },
        {
          text: "About",
          submenu: false,
          enableflag: true,
          isvue: true, 
          url: "about",
        },
      ];

    // Functions

    function showMenu() {
      state.right = '0px';
      state.displayt = "flex"
      state.displayb = "none"
    }
    function hideMenu() {
      state.right = '-300px';
      state.displayt = "none"
      state.displayb = "flex"
    }
    console.log(Version);
    return {
      Version,
      showMenu,
      hideMenu,
      state,
      topmenu
    };
  }
};
</script>
