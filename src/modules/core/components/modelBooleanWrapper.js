/*
    modelBooleanWrapper.js

    Jan 09 2022   Initial from from vue2-vu3-testbed
*/

import { computed } from 'vue'
export function modelBooleanWrapper(props, emit, name = 'value') { 
  
  return computed({ 
    get: () =>  {
      return props[name];
    },
    set: (value) => { 
        emit(`${name}`, value);
    }
  })
}
