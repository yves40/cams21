<template>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <body>
        <nav>
          <div class="nav-links" id="navLinks" v-show="state.menuvisible">
            <i class="fa fa-times" v-on:click="hideMenu"></i>
            <ul>
              <li><router-link :to="{name: 'home' }">Home</router-link></li>
              <li><a target="_blank" href="html-css/University/index.html">Test css menu</a></li>
              <li><a href="">Login</a></li>
              <li><a target="_blank" href="http://www.heden.fr/">Heden</a></li>
              <li><a target="_blank" href="https://www.foscam-france.fr/">Foscam</a></li>
              <li><router-link :to="{name: 'contact' }">Contacts</router-link></li>
              <li><router-link :to="{name: 'about' }">About Test</router-link></li>
            </ul>
          </div>
          <div v-show="!state.menuvisible">
            <i class="fa fa-bars" v-on:click="showMenu" ></i>
          </div>
        </nav>
    </body>
  </html>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const Version = "topmenu 1.14: Jul 09 2021";
    let state = reactive ( {
      menuvisible:  true
    })

    function showMenu() {
      console.log("Show");
      state.menuvisible = true;
      const docsample = document.documentElement.navlinks;
      console.log(JSON.stringify(docsample));
    }
    function hideMenu() {
      console.log("Hide");
      state.menuvisible = false;
      const docsample = document.documentElement.navlinks;
      console.log(JSON.stringify(docsample));
    }

    return {
      Version,
      showMenu,
      hideMenu,
      state
    };
  }
};
</script>
