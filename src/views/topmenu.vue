<template>
<div>
    <div>{{Version}}</div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
</div>
</template>

<script>

export default {
  setup() {
    const Version = 'topmenu 1.01: May 07 2021'
    return {
      Version
    }
  }
}
</script>
