<!--
  numericfield.vue

  Sep 08 2019   Initial
  Sep 24 2019   Problem with external link in sub menus
  Sep 28 2019   Debug the external link detection logic
  0ct 03 2019   Applink detection logic, fix
  Jan 09 2022   Import in cams21 for tests
  Jan 10 2022   WIP on parent child communication with Vue3

-->
<template >
  <div>
    <div class="grid2-60 viewframe">
      <span>{{msg}}</span>
      <div>
        <input class="field" :class="theclass" type="text" v-model="thenumber"/>
      </div>
    </div>
  </div>
</template>

<script>

/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-setup-props-destructure */


import { ref, computed, watch } from "vue";
import { modelNumberWrapper } from "./modelNumberWrapper";

export default {
  props: {
    value: Number,
    maxvalue: String,
    minvalue: String,
    message: String
  },
  emits: {
    value: Number,
    isvalid: Boolean
  },
  name: 'numericfield',
   //-----------------------------------------------------------------------
  // Boot time ==> Setup
  //-----------------------------------------------------------------------
  setup(props, {emit} ) {

    let Version = 'numericfield: 2.60, Jan 10 2022 '
    const thenumber = modelNumberWrapper(props, emit);
    let error = "None";
    let msg;
    let min, max;
    let valid = ref(inRangeCheck(thenumber.value));


    min = props.minvalue;
    max = props.maxvalue;
    msg = props.message;

    // Check min max if specified 
    if(!isNaN(min)&&!isNaN(max)) {
      msg = props.message + ' ' + min + ' to ' + max;
    }
    else{ 
      if(!isNaN(min)) { msg = props.message + ' Min:' + min; }
      if(!isNaN(max)) { msg = props.message + ' Max:' + max; }
    }
    console.log('************ ' + JSON.stringify(props));
    console.log("Component initialized", msg);
    // Control display class to be used 
    let theclass = computed( 
       () => {
        console.log(Version + ' Emit isvalid : ' + valid.value);
        emit('isvalid', valid.value);
         if (!valid.value) {
            return 'isko'
         }
        else {
            return 'isok'
        }
      }
    )

    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watch( [thenumber], ([ckey], [pkey]) => {
      valid.value = inRangeCheck(thenumber.value)
      console.log(`Change ***** ${thenumber.value}`);
    })
    //-----------------------------------------------------------------------
    // Check boundaries
    // Called on 1st load and then for each key input
    //-----------------------------------------------------------------------
    function inRangeCheck(number) {
      let isvalid = true;
      if(!isNaN(min)&&!isNaN(max)) {
        if(number < min || number > max) isvalid = false;
      }
      else {
        if(!isNaN(min)) {
          if(number < min) isvalid = false;
        }
        else {
          if(!isNaN(max))
            if(number > max) isvalid = false;
        }
      }
      return isvalid;
    }
    //-----------------------------------------------------------------------
    // Just version
    //-----------------------------------------------------------------------
    function getVersion() { return  Version;}

    return { 
      thenumber,
      msg,
      theclass,
      error,
      Version,
    }
  }
}

</script>

<style scoped>

.isok {color:green; }
.isko { color:red; }

</style>
