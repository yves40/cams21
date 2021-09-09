<!--
  AppLink.vue
  From the excellent article here :   https://vueschool.io/lessons/extending-router-link-for-external-urls

  Sep 28 2019   Initial

-->

<template>

  <a v-if="isExternal" class="external-link" :href="to" target="_blank" rel="noopener"><slot></slot></a>

  <router-link v-else class="internal-link" v-bind="$props" ><slot></slot></router-link>

</template>

<script>

import { RouterLink } from 'vue-router';

export default {
  props: {
    ...RouterLink.props
  },

  computed: {
    isExternal() {
      return typeof this.to === 'string' && this.to.startsWith('http');
    }
  }
}
</script>