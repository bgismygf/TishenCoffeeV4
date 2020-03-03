<template>
  <div id="app" @click="navSwitch($event)">
      <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'App',
  methods: {
    navSwitch(event) {
      if ($(window).width() <= 991) {
        if (event.toElement.innerText === '我的最愛') {
          return;
        }
        $('#navbarSupportedContent').collapse('hide');
      }
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/all";
</style>
