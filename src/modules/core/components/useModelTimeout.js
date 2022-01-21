/* eslint-disable no-unused-vars */

/*
    useModelTimeout.js

    Jan 09 2022   Initial from from vue2-vu3-testbed
*/

import { watch } from "vue";

export function useModelTimeout(message) {
  const Version = "useModelTimeout 1.06: Aug 18 2020";
  let tt;
  const reset = () => {
    if (tt) {
      clearTimeout(tt)
    }
    tt = setTimeout(() => {
      message.value = '';
      console.log('Reset')
    }, 5000);
  }
  // Field modified ? Check value and reset if 5 seconds elapsed
  watch(message, (message, prevmessage) => { 
    message.value !== '' && reset();
  })
}
