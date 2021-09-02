<!--

  about.vue

  Sep 02 2021   Initial
  
-->
<template>
    <div class="centeredtext">
      <h4>{{version}}</h4>
      <p class="underlined">This is the amazing cams utility application Currently supports Heden and Foscam devices</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nisi atque sunt, eveniet odio laboriosam ratione ipsa, praesentium voluptates magnam quisquam nam voluptatum doloremque dicta? Maxime voluptatum pariatur recusandae blanditiis veritatis voluptates nemo facilis accusamus. Tempora quibusdam nostrum libero amet.</p> 
      <button class="button" @click="click('OK')">{{props.ok}}</button>
    </div>  
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
      const version = "about 1.09, Sep 02 2021"
      const router = useRouter();

      let okbutton = false;
      let okr = null;

      if(typeof props.ok != 'undefined') { okbutton = true; }
      if(typeof props.okroute === 'undefined') okr = 'home'; 
        else okr = props.okroute;


       console.log(JSON.stringify(props))
      function click(action) {
       switch(action) {
          case 'OK': router.push({name: okr, params: { ok: 'ok', okr: 'home'}});
                break;
        }
    }
      return {
        version,
        props,
        click
      }
    }
  }
</script>
