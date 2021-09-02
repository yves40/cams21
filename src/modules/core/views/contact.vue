<!--

  contact.vue

  Jan 02 2020   Initial
  Sep 02 2021   cams2021
  
-->
<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div class="centeredtext">
        <h4>{{version}}</h4>
        <p class="underlined">Send an email to</p>
        <p></p>
        <div>
          <p class="Hcompressed">yves@free.fr/Stock holder</p>
          <p class="Hcompressed">elis.stock@free.fr/Stock holder</p>
          <p class="Hcompressed">isa.redbull@free.fr/Project Manager</p>
          <p class="Hcompressed">ben.bnp@free.fr/Senior developer</p>
        </div>
        <button class="button" @click="click('OK')">{{props.ok}}</button>
      </div>
    </body>
  </html>
</template>

<script>

/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-setup-props-destructure */

import { useRouter } from 'vue-router'

export default {
  props: {
    message: String,
    ok: String,
    okroute: String,
  },
  setup(props) {
    
    const version = "contact 1.07, Sep 02 2021 ";
    const router = useRouter();

    let okbutton = false;
    let okr = null;
    
    if(typeof props.ok != 'undefined') { okbutton = true; }
    if(typeof props.okroute === 'undefined') okr = 'home'; 
      else okr = props.okroute;


      console.log(JSON.stringify(props))
    function click(action) {
      switch(action) {
        case 'OK': router.push(okr);
              break;
      }
    }
    return {
      version,
      okbutton,
      props,
      click
    };
  }
}
</script>