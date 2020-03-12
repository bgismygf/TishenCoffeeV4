<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Alert></Alert>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Alert from '../components/AlertMessage.vue';

export default {
  components: {
    Navbar,
    Footer,
    Alert,
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>
