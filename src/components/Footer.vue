<template>
    <!-- footer -->
<div>
<footer class="py-3 bg-main text-white" style="position: relative;">
  <a href="#" class="text-white text-decoration-none" style="position: absolute; right: 30px;"
  @click.prevent="slideToTop">
    <div class="d-flex flex-column text-center">
      <i class="fas fa-angle-up"  style=""></i>
      <p class="small mb-0">Top</p>
    </div>
  </a>
  <div class="text-center my-3">
      <img src="@/assets/img/logo.svg" width="165" height="21" title="Tíshén coffee" alt="">
    </div>
  <div class="text-center mb-3">
        <a href="#" class="text-danger">
          <div class="footer_icon_animation">
              <i class="far fa-envelope fa-lg"></i>
          </div>
        </a>

        <a href="#" class="text-danger">
          <div class="footer_icon_animation">
              <i class="fab fa-facebook-f fa-lg"></i>
          </div>
        </a>

        <a href="#" class="text-danger">
          <div class="footer_icon_animation">
              <i class="fab fa-instagram fa-lg"></i>
          </div>
        </a>

        <a href="https://github.com/bgismygf?tab=repositories" target="_blank" class="text-danger">
          <div class="footer_icon_animation">
              <i class="fab fa-github fa-lg"></i>
          </div>
        </a>

  </div>
  <p class="text-center">Copyight © 2019 Tíshén coffee.All rights used as learning.</p>
</footer>
</div>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    slideToTop() {
      $('html,body').animate({ scrollTop: 0 }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer_icon_animation {
  display: inline-block;
  vertical-align: middle;
  height: 50px;
  width: 50px;
  position: relative;
  line-height: 45px;
  margin: 0 5px 0 5px;
  transition:all .2s;
}

.footer_icon_animation:hover {
  animation-name:icon;
  animation-duration:0.5s;
  animation-iteration-count:infinite;
  animation-direction:alternate;
}

@keyframes icon {
  0% {
    top:0;
  } 100% {
    top:-10px;
  }
}
</style>
