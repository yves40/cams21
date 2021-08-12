<!--

  Delete.vue

  Dec 20 2019   Initial
  Dec 21 2019   Use swal from bootstrap-sweetalert
  Jan 16 2020   Better logic on user deletion service call
  Jan 29 2020   Generic delete for any user : User object parameter passed
  Apr 06 2020   Transmit host name when created to the Vuex store
  Aug 10 2021   Shoot swal lib

-->
<template>
  <div>
    <b-container>
    <b-row>
      <b-col cols="2"></b-col>
      <b-col>
        <img src="../../../images/users.png" />
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>

    <b-row>
      <b-col cols="2"></b-col>
      <b-col>
        <p>{{version}}</p>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>

    <b-card>
      <b-card-text>
        <li><strong>{{targetuser.email}}</strong></li>
        <li>{{targetuser.name}}</li>
        <li>{{targetuser.description}}</li>
      </b-card-text>
      <p> Beware !!!!!! Deleting an account will be irreversible</p>
    </b-card>

    <b-card>
              <b-navbar toggleable="sm">
                <b-navbar-toggle target="collapsemenu"></b-navbar-toggle>
                <b-collapse id="collapsemenu" is-nav>
                  <b-navbar-nav class="mr-auto">
                    <div v-if="selfedit">
                      <b-button pill variant="danger"  v-on:click="deleteme">Delete Me</b-button>
                    </div>
                    <div v-else>
                      <b-button pill variant="danger"  v-on:click="deleteme">Delete {{targetuser.email}}</b-button>
                    </div>
                    <b-button pill variant="primary" v-on:click="gotohome">Cancel</b-button>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
    </b-card>
    </b-container>
  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
const logger = require('../../core/services/logger');
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      version: "Delete 1.23, Apr 06 2020",
      selfedit: true,
      targetuser: null,
    };
  },
 
 created() {
    this.$store.dispatch("userstore/setNodeServer", { loc: window.location.hostname });
    this.$parent.disableMenu('deleteme');
    if ( this.$route.params.email !== undefined) {
      this.selfedit = false;
      this.targetuser = this.$route.params;
    }
    else {
      this.targetuser = this.$store.state.userstore.loggeduser.model
    }
  },
  methods: {
    // Some funny things with swal
    deleteme() {
        if (this.selfedit) {    // --------------------------------  User delete itself ? 
          // Action call (asynchronous)
          this.$store.dispatch('userstore/logout', {router: this.$router, path: this.$route.path, mode: 'afterdelete'});
          // Mutation SYNC call
          this.$store.commit('userstore/delete');
          this.$parent.setupMenus('logout');
        }
        else {                  // --------------------------------  User is deleted by an admin 
          // Action ASYNC call
          this.$store.dispatch('userstore/delete', { email: this.targetuser.email} );
          this.$router.push({ name: 'listusers' });
        }
    }
    ,
    gotohome() {
      this.$router.push({ name: 'home' });
    },
  }
};
</script>
