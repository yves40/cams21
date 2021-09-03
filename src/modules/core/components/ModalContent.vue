
<template>
  <div class="look">
    <h2>{{title}}</h2>
    <p>{{msg}}</p>
    <button class="button" @click="$emit('close')">Close</button>
  </div>
</template>

<script>

export default {
  name: 'modal-content',
  props: {
    title: String,
    msg: String
  },

  setup(props) {
    return {
      props
    }
  }

}
</script>
<style scoped>
.look {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  margin: .5rem;
}
p {
  margin: .5rem;
}

</style>