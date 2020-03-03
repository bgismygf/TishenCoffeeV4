<template>
    <div>
        <Alert></Alert>
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/AlertMessage';

export default {
  components: {
    Navbar,
    Footer,
    Alert,
  },
};
</script>
