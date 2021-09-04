
<template>
  <transition name="pop" appear>
    <div class="look">
      <h2>{{title}}</h2>
      <p>{{msg}}</p>
      <button class="button" @click="$emit('action')">{{label}}</button>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'modal-content',
  props: {
    title: String,
    msg: String,
    label: String
  },

  setup(props) {
    return {
      props
    }
  }

}
</script>
<style scoped>
.pop-enter-from { opacity: 0 }
.pop-enter-to { opacity: 1 }
.pop-enter-active, .pop-leave-active { transition: all 2s ease };
.pop-leave-from { opacity: 1 }
.pop-leave-to { opacity: 0 }

.look {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
h2 {
  margin: .5rem;
}
p {
  margin: .5rem;
}

</style>