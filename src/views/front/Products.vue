<template>
  <div>
    <FloatCart class="d-lg-none"></FloatCart>
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
      isLoading: false,
      favoriteLength: '',
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
      this.$store.dispatch('getItem', title);
      if (this.$route.query.category) {
        this.$router.push('/product_list');
      }
    },
    getProducts() {
      this.$store.dispatch('getProducts');
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('addtoCart', { id, qty });
    },
    moreContent(productId, isEnabled) {
      if (isEnabled === 0) {
        return;
      }
      this.$router.push(`/product_list/${productId}`);
    },
    getFavoriteData() {
      this.$store.dispatch('getFavoriteData');
    },
    addFavorite(item) {
      this.$store.dispatch('addFavorite', item);
    },
    getFilteredFavorite(item) {
      return this.favoriteData.some((el) => {
        const result = item.id === el.id;
        return result;
      });
    },
    removeFavorite(item) {
      this.$store.dispatch('removeFavorite', item);
    },
    // getCategory() {
    //   if (this.$route.query.category) {
    //     this.select = this.$route.query.category;
    //   }
    // },
  },
  computed: {
    filteredData() {
      return this.$store.state.products;
    },
    select() {
      return this.$store.state.select;
    },
    favoriteData() {
      return this.$store.state.favoriteData;
    },
  },
  created() {
    this.getProducts();
    this.getFavoriteData();
    // this.getCategory();
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
