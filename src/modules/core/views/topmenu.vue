<!-- 

  Jan 01 2021   Initial
  Aug 28 2021   Work on router-link entry parameters
  Aug 29 2021   Test other routes options ( about, contacts)
  Sep 02 2021   About page has params 
  Sep 03 2021   New teleport sample : Test popup messages

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
        <nav>
          <div class="menu-icons">
            <i class="fa fa-times" v-on:click="hideMenu" v-bind:style="{ display: state.displayt }"></i>
            <i class="fa fa-bars" v-on:click="showMenu" v-bind:style="{ display: state.displayb }"></i>
          </div>
          <div id="navLinks">
            <ul class="nav-list"  v-bind:style="{ right: state.right }">
              <li><router-link :to="{name: 'home'}" v-on:click="hideMenu">Home</router-link></li>
              <li><a href="#">Sandbox<i class="fas fa-arrow-down"></i></a>
                <ul class="sub-menu">
                  <li><a target="_blank" href="html-css/University/index.html">css menu #1</a></li>
                  <li><a target="_blank" href="html-css/cssmenu/index.html">css menu #2</a></li>
                  <li><router-link :to="{name: 'aboutyves' }" v-on:click="hideMenu">About Yves</router-link></li>            
                  <li><router-link :to="{name: 'notif' }" v-on:click="hideMenu">Notification</router-link></li>              
                  <li><router-link :to="{name: 'spopup' }" v-on:click="hideMenu">Popup</router-link></li>                      </ul>
              </li>
              <li><a href="#">Users<i class="fas fa-arrow-down"></i></a>
                <ul class="sub-menu">
                  <li><a href="#">One</a>
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
              <li><a target="_blank" href="http://www.heden.fr/">Heden</a></li>
              <li><a target="_blank" href="https://www.foscam-france.fr/">Foscam</a></li>
              <li><router-link :to="{name: 'contact', params: {
                      ok:'Home',
                      okroute: 'home',
                    }}" 
              v-on:click="hideMenu">Contacts</router-link></li>
              <li><router-link :to="{name: 'about' , params: {
                      ok:'Home',
                      okroute: 'home',
                    }}" v-on:click="hideMenu">About</router-link></li>      
            </ul>
          </div>
          <p></p>
        </nav>
    </body>
  </html>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const Version = "topmenu 1.26: Sep 02 2021";
    let state = reactive ( {
      right: '-200px',
      displayt: 'none',
      displayb: 'flex'
    })

    function showMenu() {
      state.right = '0px';
      state.displayt = "flex"
      state.displayb = "none"
    }
    function hideMenu() {
      state.right = '-200px';
      state.displayt = "none"
      state.displayb = "flex"
    }
    console.log(Version);
    return {
      Version,
      showMenu,
      hideMenu,
      state
    };
  }
};
</script>
