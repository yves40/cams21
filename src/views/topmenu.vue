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
          <div class="nav-list" id="navLinks" v-bind:style="{ right: state.right }">
            <ul>
              <li><router-link :to="{name: 'home' }" v-on:click="hideMenu">Home</router-link></li>
              <li><a href="">Sandbox<i class="fas fa-arrow-down"></i></a>
                <ul class="sub-menu">
                  <li><a target="_blank" href="html-css/University/index.html">css menu #1</a></li>
                  <li><a target="_blank" href="html-css/cssmenu/index.html">css menu #2</a></li>
                </ul>
              </li>
              <li><a href="">Users<i class="fas fa-arrow-down"></i></a>
                <ul class="sub-menu">
                  <li><a href="">One</a>
                    <ul class="sub-menu">
                      <li><a href="">Four</a></li>
                      <li><a href="">Five</a></li>
                      <li><a href="">Six</a></li>
                      <li><a href="">Seven</a></li>
                      <li><a href="">Eight</a></li>
                    </ul>
                  </li>
                  <li><a href="">Two</a></li>
                  <li><a href="">Three</a></li>
                </ul>
              </li>
              <li><a target="_blank" href="http://www.heden.fr/">Heden</a></li>
              <li><a target="_blank" href="https://www.foscam-france.fr/">Foscam</a></li>
              <li><router-link :to="{name: 'contact' }" v-on:click="hideMenu">Contacts</router-link></li>
              <li><router-link :to="{name: 'about' }" v-on:click="hideMenu">About</router-link></li>
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
    const Version = "topmenu 1.22: Jul 27 2021";
    let state = reactive ( {
      right: '-200px',
      displayt: 'none',
      displayb: 'flex'
    })

    function showMenu() {
      console.log("Show");
      state.right = '0px';
      state.displayt = "flex"
      state.displayb = "none"
    }
    function hideMenu() {
      console.log("Hide");
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
