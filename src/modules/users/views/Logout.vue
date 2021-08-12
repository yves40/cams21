<!--

  Logout.vue
  
  Jan 31 2019   Initial
  Feb 06 2019   Simplify axios   
  Feb 08 2019   axiosutility...
  Mar 15 2019   Test token invalidation after logout. 
                No longer delete it from local storage
                Instead, shorten its expiration time
  Nov 07 2019   cams-Bootstrap4
  Nov 29 2019   Identiy menu entry
  Dec 17 2019   Edit user profile page de-activated
  Jan 02 2020   New top menu management @ logout
  Jan 16 2020   Trace the logout mode
  Aug 10 2021   Shoot swal lib
 
-->
<template>
  <div></div>
</template>

<script>

import { mapActions } from 'vuex'
import logger from '../../core/services/logger';

export default {
  data: () => ({
    Version: 'Logout:1.27, Jan 16 2020 ',
  }),
  mounted() {
    this.logout();
  },
  methods: {
    ...mapActions(
      'userstore', {
        logoutVuex: 'logout',
      }
    ),
    // --------------------------------- Logging out  --------------------------------
    logout() {
      // If logout is called after a delete user (by himself) pass the parameter to the logout method
      // as setting the logout time is no longer possible
      let logoutmode = 'standard';
      if ( this.$route.params.mode !== undefined) {
        logoutmode = this.$route.params.mode;
      }
      logger.debug(this.Version + 'logout mode is :' +  logoutmode);
      this.logoutVuex({router: this.$router, path: this.$route.path, mode: logoutmode})
        // eslint-disable-next-line no-unused-vars
        .then((result) => {
          if (logoutmode === 'standard')
            logger.info(this.Version + 'Logged out');
          else
            logger.info(this.Version + 'Deleted and disconnected')
          this.$parent.setupMenus('logout');
        })
        .catch((err) => {
          logger.error(this.Version + 'an error occured during user logout');
          logger.error(err);
        });
    },
  },
};
</script>
