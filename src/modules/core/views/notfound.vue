<template>
<div class="centeredtext">
  <h1>Oops, it looks like the page you're looking for doesn't exist.</h1>
  <h3>This can be either a bug or you typed a wrong URL</h3>
  <p>In case the problem persists send a email to one of these contacts here.
    <button class="button red" @click="click('CONTACTS')">Contacts</button>
  </p>
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

    const version = "notfound 1.02, Sep 07 2021 ";
    const router = useRouter();
    function click(action) {
      switch(action) {
        case 'HOME': router.push('home');
              break;
        case 'CONTACTS': router.push({name: 'contact', params: { ok: 'Home', okr: 'home'}});
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
