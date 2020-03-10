<template>
  <div>
    <FloatCart class="d-lg-none"></FloatCart>
    <loading :active.sync="isLoading"></loading>
      <div class="container mt-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb text-main bg-transparent
                     border-bottom border-main border-radius-0 p-0">
            <li class="breadcrumb-item"><router-link to="/" class="text-main">首頁</router-link></li>
            <li class="breadcrumb-item" aria-current="page">菜單</li>
            <li class="breadcrumb-item" aria-current="page">{{ select }}</li>
          </ol>
        </nav>

        <div class="row my-3">
        <div class="col-12 col-lg-2">
          <div class="sticky-top" style="top:20px;z-index: 1;">
              <div class="d-flex flex-column" v-for="(item, index) in categories" :key="index">
                <a href="#" class="btn btn-main mb-2" :class="{'active': select == item.title}"
                @click.prevent="getItem(item.title)">{{ item.title }}</a>
              </div>
          </div>
        </div>
        <div class="col-12 col-lg-10">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 mb-4"
              v-for="item in filteredData" :key="item.id">
              <a href="#" class="d-block text-decoration-none border-radius-5"
                :class="{ 'products-is_enabled-f': !item.is_enabled,
                'products-is_enabled-t': item.is_enabled }"
                @click.prevent="moreContent(item.id, item.is_enabled)">
              <div class="bg-cover-c products-img-h border-t-radius-5"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
              </div>
              <div class="products-favorite">
                <a href="#">
                  <i class="fas fa-heart fa-lg text-danger"
                    @click.prevent.stop="removeFavorite(item)"
                    v-if="getFilteredFavorite(item)">
                    </i>

                  <i class="far fa-heart fa-lg text-danger"
                    @click.prevent.stop="addFavorite(item)"
                    v-else>
                    </i>
                </a>
              </div>
              <div class="text-white bg-main border-b-radius-5 p-3 border-top">
                <h5 class="border-bottom border-white pb-1 text-center text-md-left">
                  {{ item.title }}
                </h5>
                <div class="d-flex justify-content-end align-items-end pb-1">
                  <del>${{ item.origin_price }}</del>
                  <h5 class="ml-auto mb-0 text-danger">特價 ${{ item.price }}</h5>
                </div>
                  <a href="#"
                    class="btn btn-main border-white btn-sm btn-block"
                    @click.prevent.stop="moreContent(item.id)"
                    v-if="item.is_enabled">
                    查看更多
                  </a>
                  <a href="#" class="btn btn-main border-white btn-sm btn-block disabled"
                    v-else>
                    Coming Soon !
                  </a>
                  <a href="#" class="btn btn-danger btn-sm btn-block"
                    @click.prevent.stop="addtoCart(item.id)"
                    v-if="item.is_enabled">加入購物車</a>
                  <a href="#" v-else class="btn btn-danger btn-sm btn-block disabled">
                    Sold Out !
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FloatCart from '../../components/FloatCart.vue';

export default {
  components: {
    FloatCart,
  },
  data() {
    return {
      select: '全部菜單',
      isLoading: false,
      favoriteLength: '',
      favoriteData: [],
      products: [],
      pagination: {},
      cart: {},
      categories: [
        { title: '全部菜單' },
        { title: '熱食餐點' },
        { title: '輕食甜點' },
        { title: '咖啡飲品' },
        { title: '其他飲品' },
      ],
    };
  },
  methods: {
    getItem(title) {
      this.select = title;
      if (this.$route.query.category) {
        this.$router.push('/product_list');
      }
    },
    getProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/products/all`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      vm.$http.post(api, { data: cart }).then(() => {
        vm.$bus.$emit('getCart');
        vm.$bus.$emit('message:push', '已加入購物車', 'success');
      });
    },
    moreContent(productId, isEnabled) {
      if (isEnabled === 0) {
        return;
      }
      this.$router.push(`/product_list/${productId}`);
    },
    getFavoriteData() {
      this.favoriteData = JSON.parse(localStorage.getItem('favoriteData')) || [];
    },
    addFavorite(item) {
      const vm = this;
      const favoriteItem = {
        id: item.id,
        title: item.title,
        is_enabled: item.is_enabled,
      };
      vm.favoriteData.push(favoriteItem);
      localStorage.setItem('favoriteData', JSON.stringify(vm.favoriteData));
      vm.$bus.$emit('favoriteData');
      vm.$bus.$emit('message:push', '已加入我的最愛', 'success');
    },
    getFilteredFavorite(item) {
      return this.favoriteData.some((el) => {
        const result = item.id === el.id;
        return result;
      });
    },
    removeFavorite(item) {
      const vm = this;
      const num = vm.favoriteData.findIndex((el) => {
        const result = el.id === item.id;
        return result;
      });
      vm.favoriteData.splice(num, 1);
      localStorage.setItem('favoriteData', JSON.stringify(vm.favoriteData));
      vm.$bus.$emit('favoriteData');
      vm.$bus.$emit('message:push', '已從我的最愛中刪除', 'danger');
    },
    getCategory() {
      if (this.$route.query.category) {
        this.select = this.$route.query.category;
      }
    },
  },
  mounted() {
    const vm = this;
    vm.$bus.$on('favoriteData', vm.getFavoriteData);
    vm.$bus.$on('removeAllFavorite', (data) => {
      vm.favoriteData = data;
      localStorage.setItem('favoriteData', JSON.stringify(vm.favoriteData));
    });
  },
  computed: {
    filteredData() {
      const vm = this;
      if (vm.select === '全部菜單') {
        return vm.products;
      }
      return vm.products.filter((item) => item.category === vm.select);
    },
  },
  created() {
    this.getProducts();
    this.getFavoriteData();
    this.getCategory();
  },
};
</script>

<style lang="scss" scoped>
.products-img-h {
  height: 250px;
}

.products-favorite {
  position: absolute;
  top: 12px;
  right: 30px;
}

.products-is_enabled-f {
  cursor: default;
}

.products-is_enabled-t:hover {
  box-shadow: 0 1px 10px #000;
  transition: all .3s;
}
</style>
