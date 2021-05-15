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
      <section class="header">
        <nav>
          <a href="index.html"><img src="../images/logo.png" alt=""/></a>
          <div class="nav-links" id="navLinks">
            <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
              <li><a href="">Login</a></li>
              <li><a href="">Heden Site</a></li>
              <li><a href="">Foscam site</a></li>
              <li><a href="">Contact</a></li>
              <li><a @click="callabout" href="">About</a></li>
              <li><router-link tag="li" :to="{name: 'about' }">About Test</router-link></li>
              
            </ul>
          </div>
        </nav>
      </section>

      <section class="footer">
        <h4>About Us</h4>
        <p>
          We're RECO dev
        </p>
        <div class="icons">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-linkedin"></i>
        </div>
        <p>Made with <i class="fa fa-heart-o"></i> Easy Tutorials</p>
      </section>
    </body>
  </html>
</template>

<script>
export default {
  setup() {
    const Version = "topmenu 1.09: May 15 2021";

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
