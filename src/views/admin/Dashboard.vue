<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Alert></Alert>
    <DashboardNavbar></DashboardNavbar>
      <div class="container-fluid">
        <div class="row">
          <Sidebar></Sidebar>
          <main role="main" class="col-lg-10 ml-sm-auto col-lg-10 px-4">
            <router-view></router-view>
          </main>
        </div>
      </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import DashboardNavbar from '../../components/DashboardNavbar.vue';
import Sidebar from '../../components/Sidebar.vue';
import Alert from '../../components/AlertMessage.vue';

export default {
  components: {
    DashboardNavbar,
    Sidebar,
    Alert,
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  created() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)tishencoffeecookie\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = myCookie;
  },
};
</script>
<style lang="scss" scoped>
/*
 * Content
 */

[role="main"] {
  padding-top: 100px; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 50px; /* Space for fixed navbar */
  }
}
</style>
