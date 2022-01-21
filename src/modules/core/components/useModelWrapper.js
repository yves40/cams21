/* eslint-disable no-unused-vars */

/*
    useModelWrapper.js

    Jan 09 2022   Initial from from vue2-vu3-testbed
*/

import { computed } from 'vue'
export function useModelWrapper(props, emit, name = 'modelValue') { 
  return computed({ 
    get: () =>  {
      return props[name] ;
    },
    set: (value) => { 
      console.log(value);
      emit(`${name}`, value) 
    }
  })
}
