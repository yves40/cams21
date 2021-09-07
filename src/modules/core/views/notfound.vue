<template>
<div class="centeredtext">
  <h1>Oops, it looks like the page you're looking for doesn't exist.</h1>
  <p>{{version}}</p>
  <button class="button red" @click="click('HOME')">Home</button>
</div>
</template>

<script>

/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-setup-props-destructure */

import { useRouter } from 'vue-router'

export default {
  setup(props) {

    const version = "notfound 1.01, Sep 07 2021 ";
    const router = useRouter();
    function click(action) {
      switch(action) {
        case 'HOME': router.push('home');
              break;
      }
    }
    
    return {
      version,
      props,
      click
    };
  }
};
</script>
