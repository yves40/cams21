/*
    modelNumberWrapper.js

    Jan 09 2022   Initial from from vue2-vu3-testbed
*/

import { computed } from 'vue'
export function modelNumberWrapper(props, emit, name = 'value') { 
  
  return computed({ 
    get: () =>  {
      return parseInt(props[name]) ;
    },
    set: (value) => { 
      if(isNaN(value)) {
        emit(`${name}`, 0); 
      }
      else {
        console.log(`********* Emit this event : ${name} : ${value}`);
        emit(`${name}`, parseInt(value));
      }
    }
  })
}
