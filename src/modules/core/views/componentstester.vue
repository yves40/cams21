<!--

  componentstester.vue

  Jan 09 2022   Initial from vue2-vu3-testbed
  Jan 10 2022   WIP on parent child communication with Vue3
  Jan 21 2022   WIP on parent child communication with Vue3, final update ?
  Jan 22 2022   WIP on parent child communication with Vue3, final update ??
  Jan 23 2022   WIP on parent child communication with Vue3, final update ???
  
-->
<template>
<div class="centered-form">
    <div class="moduletitle">{{Version}}</div>
    <div>
      <numericfield v-model:initialvalue="age" @setnumber="age = $event" @isvalid="agevalid = $event" 
          minvalue="12" maxvalue="120" message="Age :" />
      <!-- 
        <numericfield v-model:size="size" @isvalid="sizevalid = $event" maxvalue="200" message="Size :"/>
        <numericfield v-model:weight="weight" @isvalid="weightvalid = $event" minvalue="30" message="Weight :"/>
        <numericfield v-model:freezone="freezone" message="Free input :"/>
      -->
      <p>Age : {{age}}</p>
      <div>
        <span>Result : {{ thesum }}</span>
      </div>     
      <button type="submit" :disabled='!buttonflag'>Ready to send</button>
    </div>
</div>

</template>

<script>

/* eslint-disable no-unused-vars */

import numericfield from "../components/numericfield"

import { onMounted, ref, computed, onUnmounted } from "vue";

export default {
  props: {
  },
  components: {
    numericfield,
  },
  name: 'Components tester',
  setup(props, context) {

    let Version = 'componentstester: 2.04, Jan 23 2022 '

    let age = ref(20);
    let agevalid = ref(false);
    let size = ref(100);
    let sizevalid = ref(true);
    const weight = ref(100);
    let weightvalid = ref(true);
    let freezone = ref(100);
    let thesum = computed( () => age.value + size.value + weight.value + freezone.value);
    let buttonflag = computed( () => agevalid.value && sizevalid.value && weightvalid.value );

    // Test lifecycle handlers
    console.clear();
    onUnmounted(() =>  {
      console.clear();
       console.log(Version + 'UnMounted');
       })
    onMounted(() =>  {console.info(Version + 'Mounted');})
    
    // Utilities
    function getVersion() { return  Version; }

    return { 
      age,
      agevalid,
      size,
      sizevalid,
      weight,
      weightvalid,
      freezone,
      thesum,
      buttonflag,
      Version,
    }
  }
}

</script>

<style scoped>
#outer-grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  grid-auto-flow: column;
}
#outer-grid > div {
  background-color: orangered;
  color: white;
  font-size: 4vw;
  padding: 8px;
}
#inner-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
}
#inner-grid > div {
  background: salmon;
  padding: 8px;
}
</style>

