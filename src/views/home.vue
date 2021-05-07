<template>
<div>
  <div class="moduletitle">{{Version}}</div>
  <div class="home">
    Hello I'm your home vue
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  setup() {
    const Version = 'Home.vue 1.00, May 07 2021'

    return { Version };
  }
}
</script>
