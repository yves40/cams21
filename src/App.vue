<template>
  <div id="app">
    <div id="header">{{ Topmessage }}</div>
    <topmenu />
    <div id="appzone">
      <router-view />
    </div>
    <div id="footer">
      {{ Version }}
    </div>
  </div>
</template>

<script>
import topmenu from "./views/topmenu";

export default {
  name: "App",
  components: {
    topmenu
  },
  setup() {
    const Version = "cams2021 1.01, May 07 2021";
    const Topmessage = "cams21 helper";

    return { Version, Topmessage };
  }
};
</script>
