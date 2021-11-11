<!-- 

  Jan 01 2021   Initial
  Aug 28 2021   Work on router-link entry parameters
  Aug 29 2021   Test other routes options ( about, contacts)
  Sep 02 2021   About page has params 
  Sep 03 2021   New teleport sample : Test popup messages
  Sep 07 2021   Sub menu spacing for small screen
  Sep 08 2021   1 st test with parametered menu entries
  Sep 09 2021   Follow up.
  Sep 28 2021   Debug the external link detection logic
  0ct 03 2021   Applink detection logic, fix
                Add 2nd level submenu support
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
              <!-------------------------------------------------------------------------------------------
                Generated menu, based on the json "topmenu" structure below
              --------------------------------------------------------------------------------------------> 
              <!-- Top level -->
              <span v-for="entry in topmenu" :key="entry.id">
                <li v-show="entry.enableflag">
                  <span v-if="entry.submenu">
                    <AppLink :to="{name: entry.url, params: entry.params }">
                                  {{entry.text}}
                                  <i class="fas fa-arrow-down"></i>
                    </AppLink>
                  </span>
                  <span v-else>
                    <AppLink :to="{name: entry.url, params: entry.params }" v-on:click="hideMenu">
                                              {{entry.text}}
                    </AppLink>
                  </span>
                  <ul v-if="entry.submenu" class="sub-menu">
                    <!-- 1st level -->
                    <li v-for="subentry in entry.submenuentries" :key="subentry.id" v-show="subentry.enableflag">
                              <AppLink :to="{name: subentry.url, params: subentry.params}" v-on:click="hideMenu">
                              {{subentry.text}}
                              <span v-if="subentry.submenu"><i class="fas fa-arrow-down"></i></span>
                              </AppLink>
                        <ul v-if="subentry.submenu" class="sub-menu">
                            <!-- 2nd level -->
                            <li v-for="subentry2 in subentry.sub2menuentries" :key="subentry2.id" v-show="subentry2.enableflag">
                                    <AppLink :to="{name: subentry2.url, params: subentry2.params}" v-on:click="hideMenu">
                                    {{subentry2.text}}
                                    </AppLink>
                            </li>
                        </ul>
                    </li>
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

import { reactive, onBeforeUnload, onBeforeUnmount, onUpdated, onDeactivated } from 'vue';
export default {
  setup() {
    const Version = "topmenu 1.43: Nov 11 2021";
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
              { url: "http://heden.fr", params: {}, text: "Heden", enableflag: true, disableflag: false, },
              { url: "https://www.foscam-france.fr/", params: {}, text: "Foscam", enableflag: true, disableflag: false, },
              {
                text: "Cams providers",
                enableflag: true,
                submenu: true,
                sub2menuentries: [
                  { text: "Contacts", submenu: false, enableflag: true, url: "contact",params: { ok:'Home', okroute: 'home'}, },
                  { url: "http://heden.fr", params: {}, text: "Heden", enableflag: true, disableflag: false, },
                  { url: "https://www.foscam-france.fr/", params: {}, text: "Foscam", enableflag: true, disableflag: false, },
                ]
              }
            ]
        },
        {
          text: "Users",
          enableflag: true,
          submenu: true,
          submenuentries: [
            { url: "notyet", params: {
                                  message: 'Login will be available soon',
                                  ok: 'Home',
                                  okroute: 'home',
                                },
                      text: "Login", enableflag: true, disableflag: false, },
            { url: "notyet",params: {}, text: "Logout", enableflag: false, disableflag: false,},
            { url: "notyet", params: {
                                  message: 'Register will be available soon',
                                  ok: 'Home',
                                  okroute: 'home',
                                },
                      text: "Register", enableflag: true, disableflag: false, },
            { url: "notyet",params: {},text: "Identity", enableflag: false, disableflag: false, },
            { url: "notyet",params: { mode: 'STD'},text: "My profile", enableflag: false, disableflag: false, },
            { url: "notyet",params: {},text: "Delete ME!", enableflag: false, disableflag: false, },
          ]
        },
        {
          text: "Heden",
          submenu: false,
          enableflag: true,
          url: "http://heden.fr",
        },
        {
          text: "Contacts",
          submenu: false,
          enableflag: true,
          url: "contact",
          params: { ok:'Home', okroute: 'home'},
        },
        {
          text: "About",
          submenu: false,
          enableflag: true,
          url: "about",
          params: { ok:'Home', okroute: 'home'},
        },
      ];

    // Functions
    onDeactivated( () =>  {
      console.log('***');
    })
      
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
