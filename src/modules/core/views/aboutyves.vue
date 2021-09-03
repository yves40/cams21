
<template>
  <div class="aboutyves">
    <button @click="toggle(1)">Toggle 1</button>
    <button @click="toggle(2)">Toggle 2</button>
  </div>

  <teleport to='#modals'>
    <div v-show="state.modal1" class="modal">
      <h1>Hello modal 1</h1>
    </div>
  </teleport>
  <teleport to='#modals'>
    <div  v-if="state.modal2" class="modal modal-2">
      <h1>Hello modal 2</h1>
    </div>
  </teleport>
  <teleport to='#messages'>
    <h4>message from about.vue</h4>
  </teleport>
  
</template>

<script>
/* eslint-disable no-unused-vars */
import { reactive } from 'vue';

export default {
  
  setup() {

    let state = reactive({
      modal1: false,
      modal2: false
    })

    function toggle(option) {
      if(option == 1) state.modal1 = !state.modal1;
      if(option == 2) state.modal2 = !state.modal2;
    }

    return {
      state,
      toggle
    }
  }
}
</script>

<style scoped>

.aboutyves {
  padding: .5rem;
  margin: .5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
}
button {
  margin: 0 1rem 0 1rem;
  padding: .2rem;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 400px;
  background: gray;
  text-align: center;
}
.modal-2 {
  height: 200px;
  width: 500px;
  background: blue;
}
</style>