<template>
  <div>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-main font-w-500 fixed-top">
        <router-link class="pt-1 pb-2 pr-3" href="#" to="/">
          <img src="@/assets/img/logo.svg" title="Tíshén coffee" width="165" height="21" alt="">
        </router-link>
        <button class="navbar-toggler" type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto text-center text-lg-left">
            <li class="nav-item d-lg-none">
              <router-link class="nav-link nav_item_style my-1 my-lg-0"
                to="/dashboard/products_manage"
                :class="{'active' : $route.name === 'ProductsManage'}">
                產品列表
              </router-link>
            </li>
            <li class="nav-item d-lg-none">
              <router-link class="nav-link nav_item_style my-1 my-lg-0"
                to="/dashboard/order_message"
                :class="{'active' : $route.name === 'OrderMessage'}">
                訂單列表
              </router-link>
            </li>
            <li class="nav-item d-lg-none">
              <router-link class="nav-link nav_item_style my-1 my-lg-0"
                to="/dashboard/coupon_message"
                :class="{'active' : $route.name === 'CouponMessage'}">
                優惠卷
              </router-link>
            </li>
            <li class="nav-item mr-lg-3">
              <router-link class="nav-link nav_item_style my-1 my-lg-0"
                to="/" :class="{ 'active' : $route.name === '/' }">
                首頁
              </router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav_item_style my-1 my-lg-0"
                :class="{ 'active' : $route.name === 'Products' }"
                @click.prevent="signout">
                登出
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    signout() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/signin');
        }
      });
    },
  },
};
</script>
