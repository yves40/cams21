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
          <div class="nav-links" id="navLinks">
            <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="">Login</a></li>
              <li><a href="">Heden Site</a></li>
              <li><a href="">Foscam site</a></li>
              <li><a href="">Contact</a></li>
              <li><a @click="callabout" href="">About</a></li>
              <li><router-link tag="li" :to="{name: 'about' }">About Test</router-link></li>
              
            </ul>
          </div>
        </nav>
    </body>
  </html>
</template>

<script>
export default {
  setup() {
    const Version = "topmenu 1.10: May 16 2021";

    var navlinks = document.getElementById("navLinks");

    function showMenu() {
      navlinks.style.right = "0";
    }
    function hideMenu() {
      navlinks.style.right = "-200px";
    }
    function callabout() {
      console.log('*');
    }

    return {
      Version,
      showMenu,
      hideMenu,
      callabout
    };
  }
};
</script>
