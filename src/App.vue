<template>
  <section class="header">
    <topmenu />
  </section>
  <section class="appzone">
      <router-view />
  </section>
  <section class="footer" >
    <pagebottom />
  </section>
</template>

<script>
import topmenu from "./views/topmenu";
import pagebottom from "./views/pagebottom"

export default {
  name: "App",
  components: {
    topmenu,
    pagebottom
  },
  setup() {
    const Version = "cams2021 1.06, May 18 2021";
    const Topmessage = "cams21 helper";

    return { Version, Topmessage };
  }
};
</script>
