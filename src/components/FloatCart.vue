<template>
    <div>
        <div class="jq-floatcart floatcart-block position-fixed bg-main">
            <a class="my-1 my-lg-0" data-toggle="modal" data-target="#floatCartModal">
            <div class="nav_badge_block">
              <i class="text-white fas fa-shopping-cart fa-lg"></i>
              <span class="badge badge-pill badge-danger position-absolute nav_badge"
                v-if="cartLength !== 0">
              {{cartLength}}
              </span>
            </div>
          </a>
        </div>

<div class="modal fade" id="floatCartModal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header"
        :class="{'border-bottom-0': cartLength !== 0}">
        <h5 class="modal-title" id="exampleModalLabel">購物車清單</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" :class="{'py-0': cartLength !== 0}">
        <h5 class="text-center text-danger" v-if="cartLength === 0">
          購物車是空的！
          </h5>
        <table class="table" v-else>
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
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-main" data-dismiss="modal">繼續逛逛</button>
        <router-link to="/create_order" data-dismiss="modal" class="btn btn-danger"
          v-if="cartLength !== 0">
          結帳去
        </router-link>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      cart: {},
      cartLength: 0,
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/cart`;
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.cartLength = vm.cart.carts.length;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/cart/${id}`;
      vm.$http.delete(api).then(() => {
        vm.$bus.$emit('getCart');
        vm.$bus.$emit('message:push', '已從購物車中刪除', 'danger');
      });
    },
  },
  mounted() {
    const vm = this;
    vm.$bus.$on('toFloatCart', vm.getCart);
    $(window).scroll(() => {
      const scrollPos = $(window).scrollTop();
      if (scrollPos >= 66) {
        $('.jq-floatcart').addClass('showfloatcart');
      } else {
        $('.jq-floatcart').removeClass('showfloatcart');
      }
    });
  },
  created() {
    const vm = this;
    vm.getCart();
  },
};
</script>

<style lang="scss" scoped>
.floatcart-block {
  bottom: 50px;
  right: -67.250px;
  z-index:5;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 20px 21px 18px 20px;
  transition: all 0.2s;
}

.showfloatcart {
  right:0px;
}
</style>
