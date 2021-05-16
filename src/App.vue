<template>
  <section class="header">
    <topmenu />
  </section>
  <section class="appzone">
      <router-view />
  </section>
  <section class="footer">
    <bottom />
  </section>
</template>

<script>
import topmenu from "./views/topmenu";
import bottom from "./views/footer"

export default {
  name: "App",
  components: {
    topmenu,
    bottom
  },
  setup() {
    const Version = "cams2021 1.04, May 16 2021";
    const Topmessage = "cams21 helper";

    return { Version, Topmessage };
  }
};
</script>
