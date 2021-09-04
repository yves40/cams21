<!-- 

  Noti
  label="Close me"ficationHandler.vue

  Sep 03 2021   Initial

-->

<template>
  <div class="root">
    
    <button v-show="!isOpen" @click="isOpen = true">Open</button>

    <teleport to='body'>
      <div class="modal" v-if="isOpen">
        <div>
          <modal-content 
            @action="isOpen = false"
            title="Does NotificationHandler work ?"
            msg="I hope so"
            label="Close me"/>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { ref } from 'vue';
import ModalContent from './ModalContent';

export default {
  components: {
    ModalContent
  },
  setup() {

const Version = "NotificationHandler 1.01: Sep 04 2021 ";

    const isOpen = ref(false);
    return { 
      isOpen
    }
  }
}

</script>
<style scoped>
.root {
  position: relative;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal > div {
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  border: solid 1px black;
}

</style>