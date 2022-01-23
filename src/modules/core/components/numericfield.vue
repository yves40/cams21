<!--
  numericfield.vue

  Sep 08 2019   Initial
  Sep 24 2019   Problem with external link in sub menus
  Sep 28 2019   Debug the external link detection logic
  0ct 03 2019   Applink detection logic, fix
  Jan 09 2022   Import in cams21 for tests
  Jan 10 2022   WIP on parent child communication with Vue3
  Jan 21 2022   WIP on parent child communication with Vue3, final update ?
  Jan 22 2022   WIP on parent child communication with Vue3, final update ??
  Jan 23 2022   WIP on parent child communication with Vue3, final update ???

-->
<template >
  <div>
    <div class="grid2-60 viewframe">
      <span>{{msg}}</span>
      <div>
        <input 
          class="field" :class="theclass" type="text" v-model="numberentry"
        />
      </div>
    </div>
  </div>
</template>

<script>

/* eslint-disable no-unused-vars */


import { ref, computed } from "vue";

export default {
  props: {
    initialvalue: Number,
    maxvalue: String,
    minvalue: String,
    message: String
  },
  emits: {
    'setnumber': null,
    isvalid: Boolean
  },
  name: 'numericfield',
  computed: {
    numberentry: 
      {
        get() { return parseInt(this.props.initialvalue) },
        set(newValue) {
          let a = newValue === "" ? 0 : newValue;
          this.$emit("setnumber", parseInt(a));
        }
      },
      theclass: 
      {
        get() {
          let isvalid = true;
          if(!isNaN(this.props.minvalue)&&!isNaN(this.props.maxvalue)) {
            if( this.numberentry < this.props.minvalue || this.numberentry > this.props.maxvalue) isvalid = false;
          }
          else {
            if(!isNaN(this.props.minvalue)) {
              if(this.numberentry < this.props.minvalue) isvalid = false;
            }
            else {
              if(!isNaN(this.props.maxvalue))
                if(this.numberentry > this.props.maxvalue) isvalid = false;
            }
          }
          this.$emit('isvalid', isvalid);
          if (isvalid) { return 'isok'} else { return 'isko'}
        }
      }
  },
   //-----------------------------------------------------------------------
  // Boot time ==> Setup
  //-----------------------------------------------------------------------
  setup(props, {emit} ) {

    let Version = 'numericfield: 2.88, Jan 23 2022 '
    let error = "None";
    let msg;
    let min, max;
    let valid = false;
    
    let properties = props;
    min = properties.minvalue;
    max = properties.maxvalue;
    msg = properties.message;


    // Check min max if specified 
    if(!isNaN(min)&&!isNaN(max)) {
      msg = props.message + ' ' + min + ' to ' + max;
    }
    else{ 
      if(!isNaN(min)) { msg = props.message + ' Min:' + min; }
      if(!isNaN(max)) { msg = props.message + ' Max: ' + max; }
    }

    //-----------------------------------------------------------------------
    // Just version
    //-----------------------------------------------------------------------
    function getVersion() { return  Version;}

    return { 
      props,
      msg,
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
