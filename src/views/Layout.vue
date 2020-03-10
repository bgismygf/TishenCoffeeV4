<template>
  <div>
    <Alert></Alert>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Alert from '../components/AlertMessage.vue';

export default {
  components: {
    Navbar,
    Footer,
    Alert,
  },
};
</script>
