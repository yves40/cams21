<template>
  <div>
    <div class="home">Hello I'm your home vue</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  setup() {
    const Version = "Home.vue 1.01, May 15 2021";

    return { Version };
  },
};
</script>
