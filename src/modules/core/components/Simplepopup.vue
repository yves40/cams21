<!-- 

  SimplePopup.vue

  Sep 03 2021   Initial

-->

<template>
  <div class="root">
    <teleport to='body'>
      <div class="modal">
        <div>
          <modal-content 
            @action="mouseAction"
            title="Does Simplepopup work ?"
            msg="I hope so"
            label="Home sweet home"
          />  
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { ref } from 'vue';
import ModalContent from './ModalContent';
import { useRouter } from 'vue-router'
export default {
  components: {
    ModalContent
  },
  setup() {

    const Version = "SimplePopup 1.03: Sep 03 2021 ";
    const router = useRouter();

    function mouseAction() {
      router.push({name: 'home'});
    }
    return { 
      mouseAction
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