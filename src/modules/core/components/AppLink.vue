<!--
  AppLink.vue
  From the excellent article here :   https://vueschool.io/lessons/extending-router-link-for-external-urls

  Sep 08 2019   Initial
  Sep 24 2019   Problem with external link in sub menus
  Sep 28 2019   Debug the external link detection logic
  0ct 03 2019   Applink detection logic, fix

-->

<template>
  <!-- 
  -->
  <a v-if="isExternal" class="external-link" :href="to.name" target="_blank" rel="noopener"><slot></slot></a>

  <router-link v-else class="internal-link" v-bind="$props" ><slot></slot></router-link>

</template>

<script>

import { RouterLink } from 'vue-router';

export default {
  props: {
    ...RouterLink.props
  },

  computed: {
    // Depending on the "to" parameter, check wether it's a Vue link or a standard http link
    isExternal() {
      if ( typeof this.to === 'object') {
        if(this.to.name !== undefined) {
          return this.to.name.startsWith('http');    
        }
        return false
      }
      // return typeof this.to === 'string' && this.to.startsWith('http');    }
      return false;    
    }
  }
}
</script>