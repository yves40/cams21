<!--

  componentstester.vue

  Jan 09 2022   Initial from vue2-vu3-testbed
  Jan 10 2022   WIP on parent child communication with Vue3
  
-->
<template>
<div class="centered-form">
    <div class="moduletitle">{{Version}}</div>
    <div>
      <numericfield v-model="age" @value="age = $event"  @isvalid="agevalid = $event" minvalue="10" maxvalue="120" message="Age :"/>
      <!-- 
      <numericfield v-model="age"  @isvalid="agevalid" minvalue="10" maxvalue="120" message="Age :"/>
      <numericfield v-model="size" @isvalid="sizevalid" maxvalue="200" message="Size :"/>
      <numericfield v-model="weight"  @isvalid="weightvalid" minvalue="30" message="Weight :"/>
      <numericfield v-model="freezone" message="Free input :"/>
      -->
      <button type="submit" :disabled='!buttonflag'>Ready to send</button>
      <div>
        <span>Result : </span>
        <span>{{ thesum }}</span>
      </div>     
    </div>
</div>

</template>

<script>

/* eslint-disable no-unused-vars */

import numericfield from "../components/numericfield"

import { onMounted, ref, computed, onUnmounted, watchEffect } from "vue";

export default {
  props: {
  },
  components: {
    numericfield,
  },
  name: 'TesterNumfield',
  setup(props, context) {

    let Version = 'TesterNumfield: 1.91, Jan 10 2022 '

    let age = ref(10);
    let agevalid = ref(false);
    let size = ref(175);
    let sizevalid = ref(true);
    const weight = ref(100);
    let weightvalid = ref(true);
    let freezone = ref(100);
    let thesum = computed( () => age.value+size.value+weight.value+freezone.value);
    let buttonflag = computed( () => agevalid.value && sizevalid.value && weightvalid.value );

    // Test lifecycle handlers
    console.clear();
    onUnmounted(() =>  {
      console.clear();
       console.log(Version + 'UnMounted');
       })
    onMounted(() =>  {console.info(Version + 'Mounted');})
    
    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watchEffect( [age, agevalid, size, sizevalid, weight, weightvalid], ([currentage, currentagevalid, currentsize, currentsizevalid, currentweight, currentweightvalid], 
                                              [prevage, prevagevalid, prevsize, prevsizevalid, prevweight, prevweightvalid]) => {
      console.log(Version + currentage + "/" + prevage + ' Age valid:' + agevalid.value);
      console.log(Version + currentsize + "/" + prevsize + ' Size valid:' + sizevalid.value);
    })

    // Check button 
    function readyTogo() {
      console.log('****************** ' + agevalid.value);
      return agevalid.value;
    }

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

