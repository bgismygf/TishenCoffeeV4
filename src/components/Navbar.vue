<template>
<div class="bg-main">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark font-w-500 px-0">
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span>
          <i class="fas fa-bars text-white"></i>
        </span>
      </button>
      <router-link class="navbar-brand pt-0 mr-0 mr-lg-4" to="/">
        <img src="@/assets/img/logo.svg" title="Tíshén coffee" width="165" height="21" alt="">
      </router-link>
<!-- 行動版-購物車選單內容 -->
        <div class="nav-item d-block d-lg-none">
          <div class="dropdown">
            <a class="nav-link nav_item_style my-1 my-lg-0" id="dropdownMenu2"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="nav_badge_block">
                <i class="fas fa-shopping-cart fa-lg"></i>
                <span class="badge badge-pill badge-danger nav_badge" v-if="cartLength !== 0">
                  {{ cartLength }}
                </span>
              </div>
            </a>
<!-- 行動版-購物車選單內容 -->
            <div class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenu2" style="min-width:450px; z-index:2;">
              <div class="px-3 py-2">
                <h5 class="text-center">購物車清單</h5>
                <table class="table">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                      <a class="text-danger" href="#"
                        @click.prevent="removeCartItem(item.id)">
                        <i class="fas fa-trash-alt"></i>
                      </a>
                    </td>
                    <td>{{ item.product.title }}</td>
                    <td>{{ item.qty }} {{ item.product.unit }}</td>
                    <td>${{ item.total }}</td>
                  </tr>
                </table>
                <router-link
                  to="/create_order" class="btn btn-danger btn-block"
                  v-if="cartLength !== 0">
                  結帳去
                </router-link>
                <h6 class="text-center" v-else>
                  <router-link to="/product_list"
                    class="text-center text-danger">購物車是空的，點我前往菜單逛逛吧！</router-link>
                </h6>
              </div>
            </div>
          </div>
        </div>
<!-- 選單 -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto text-center text-lg-left">
            <li class="nav-item mr-lg-3">
              <router-link class="nav-link nav_item_style my-1 my-lg-0" to="/"
                :class="{ 'active' : $route.name === 'Home' }">
                <span class="d-none d-lg-block">首頁</span>
                <span class="h4 d-lg-none">首頁</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link nav_item_style my-1 my-lg-0" to="/product_list"
                :class="{ 'active' : $route.name === 'Products' }">
                <span class="d-none d-lg-block">菜單</span>
                <span class="h4 d-lg-none">菜單</span>
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav text-center text-lg-left mt-3 mt-lg-0">
            <li class="nav-item mr-lg-3">
              <router-link class="nav-link nav_item_style my-1 my-lg-0" to="/signin">
                <i class="fas fa-user-alt fa-lg"></i>
                <span class="ml-2 d-lg-none">會員登入</span>
              </router-link>
            </li>
<!-- 我的最愛 -->
            <li class="nav-item mr-lg-3">
              <div class="dropdown position-absolutes">
                <a class="nav-link nav_item_style my-1 my-lg-0" id="favorite"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div class="nav_badge_block">
                    <i class="fas fa-heart fa-lg"></i>
                    <span class="badge badge-pill badge-danger nav_badge"
                      v-if="favoriteData.length !== 0">
                      {{favoriteData.length}}
                    </span>
                  </div>
                  <span class="ml-2 d-lg-none">我的最愛</span>
                </a>
<!-- 我的最愛選單內容 -->
                <div class="dropdown-menu
                  dropdown-menu-right nav_favorite_block_xs-md"
                  aria-labelledby="favorite" style="min-width:400px;">
                  <div class="px-3 py-2">
                    <h5 class="text-center">我的最愛</h5>
                    <table class="table">
                    <tr v-for="item in favoriteData" :key="item.id">
                      <td class="text-center">
                        <a class="text-danger" href="#">
                          <i class="fas fa-times"
                            @click.prevent="removeFavorite(item)"></i>
                        </a>
                      </td>
                      <td>
                        <a class="text-main" v-if="item.is_enabled" href="#"
                          @click.prevent="moreContent(item.id, item.is_enabled)">{{item.title}}</a>
                        <span class="text-main" v-else>{{item.title}}</span>
                      </td>
                      <td class="text-center">
                        <a v-if="item.is_enabled" class="text-danger" href="#"
                          @click.prevent="addtoCart(item.id)">
                          <i class="fas fa-cart-arrow-down"></i>
                        </a>
                        <span v-else class="text-danger">Sold Out</span>
                      </td>
                    </tr>
                  </table>
                    <a href="#" class="btn btn-danger btn-block"
                      v-if="favoriteData.length !== 0"
                      @click.prevent="removeAllFavorite">
                      全部刪除
                    </a>
                    <h6 class="text-center" v-else>
                      <router-link to="/product_list"
                        class="text-center text-danger">目前是空的，點我前往菜單逛逛吧！</router-link>
                    </h6>
                  </div>
                </div>
              </div>
            </li>
<!-- 購物車 -->
            <li class="nav-item d-none d-lg-block">
              <div class="dropdown">
                <a class="nav-link nav_item_style my-1 my-lg-0" id="dropdownMenu2"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div class="nav_badge_block">
                    <i class="fas fa-shopping-cart fa-lg"></i>
                    <span class="badge badge-pill badge-danger nav_badge" v-if="cartLength !== 0">
                      {{ cartLength }}
                    </span>
                  </div>
                </a>
<!-- 購物車選單內容 -->
                <div class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenu2" style="min-width:450px;">
                  <div class="px-3 py-2">
                    <h5 class="text-center">購物車清單</h5>
                    <table class="table">
                      <tr v-for="item in cart.carts" :key="item.id">
                        <td>
                          <a class="text-danger" href="#"
                            @click.prevent="removeCartItem(item.id)">
                                <i class="fas fa-trash-alt"></i>
                          </a>
                        </td>
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.qty }} {{ item.product.unit }}</td>
                        <td>${{ item.total }}</td>
                      </tr>
                    </table>
                    <router-link
                      to="/create_order" class="btn btn-danger btn-block"
                      v-if="cartLength !== 0">
                      結帳去
                    </router-link>
                    <h6 class="text-center" v-else>
                    <router-link to="/product_list"
                      class="text-center text-danger">購物車是空的，點我前往菜單逛逛吧！</router-link>
                    </h6>
                  </div>
                </div>
              </div>
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
    return {};
  },
  methods: {
    getCart() {
      this.$store.dispatch('getCart');
    },
    removeCartItem(id) {
      this.$store.dispatch('removeCartItem', id);
    },
    getFavoriteData() {
      this.$store.dispatch('getFavoriteData');
    },
    removeFavorite(item) {
      this.$store.dispatch('removeFavorite', item);
    },
    removeAllFavorite() {
      this.$store.dispatch('removeAllFavorite');
    },
    moreContent(productId, isEnabled) {
      if (isEnabled === 0) {
        return;
      }
      if (this.$route.name === 'MoreContent') {
        this.$store.dispatch('getProductMoreContent', productId);
      } else {
        this.$router.push(`/product_list/${productId}`);
      }
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('addtoCart', { id, qty });
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartLength() {
      return this.$store.state.cartLength;
    },
    favoriteData() {
      return this.$store.state.favoriteData;
    },
  },
  created() {
    const vm = this;
    vm.getCart();
    vm.getFavoriteData();
  },
};
</script>
