<!--

  notyet.vue

  Jan 02 2020   Initial
  Aug 27 2021   cams2021
  Aug 28 2021   Add optional buttons
  Aug 29 2021   Small adjustments
  
-->
<template>
  <div class="centeredtext">
      <h4>{{version}}</h4>
      <img src="../../../images/WIP.png" height="150" width="150"/>
      <p> This feature is not yet implemented.</p>
      <p>We're working hard to bring it online asap</p>

        <p class="underlined border">{{props.message}}</p>


      <button class="button" v-show="okbutton" @click="click('OK')">{{props.ok}}</button>
      <button class="button red" v-show="cancelbutton"  @click="click('CANCEL')">{{props.cancel}}</button>
      <button class="button blue" v-show="backbutton"  @click="click('BACK')">{{props.back}}</button>
  </div>
</template>

<script>

/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-setup-props-destructure */

import { useRouter, useRoute } from 'vue-router'

export default {
  props: {
    from: String,
    message: String,
    ok: String,
    cancel: String,
    back: String,
    okroute: String,
    cancelroute: String,
    backroute: String,
  },
  setup(props) {

    const version = "Notyet 1.30, Aug 29 2021 ";
    const router = useRouter();
    let okbutton = false;
    let cancelbutton = false;
    let backbutton = false;
    let okr = null;
    let backr = null;
    let cancelr = null;
    
    if(typeof props.ok != 'undefined') { okbutton = true; }
    if(typeof props.cancel != 'undefined') { cancelbutton = true; }
    if(typeof props.back != 'undefined') { backbutton = true; }
    if(typeof props.okroute === 'undefined') okr = 'home'; 
      else okr = props.okroute;
    if(typeof props.cancelroute === 'undefined') cancelr = 'home'; 
      else cancelr = props.cancelroute;
    if(typeof props.backroute === 'undefined') backr = 'home'; 
      else backr = props.backroute;

    function click(action) {
      switch(action) {
        case 'OK': router.push(okr);
              break;
        case 'CANCEL': router.push(cancelr);
              break;
        case 'BACK': router.push(backr);
              break;
      }
    }
    
    return {
      version,
      props,
      okbutton,
      cancelbutton,
      backbutton,
      okr,
      cancelr,
      backr,
      click
    };
  }
};
</script>
