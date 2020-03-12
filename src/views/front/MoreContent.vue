<template>
  <div>
    <FloatCart class="d-lg-none"></FloatCart>
    <div class="container mt-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb text-main bg-transparent
          border-bottom border-main border-radius-0 p-0">
          <li class="breadcrumb-item">
              <router-link to="/" class="text-main">首頁</router-link>
            </li>
          <li class="breadcrumb-item">
              <a href="#" class="text-main" @click.prevent="selectSwitch()">
                菜單
              </a>
            </li>
          <li class="breadcrumb-item">
              <a href="#" class="text-main" @click.prevent="selectSwitch(product.category)">
                {{product.category}}
              </a>
            </li>
          <li class="breadcrumb-item" aria-current="page">{{product.title}}</li>
          </ol>
        </nav>

        <div class="row my-3">
          <div class="col-md-12 col-lg-4 mb-3 mb-lg-0" style="z-index:1;">
            <div class="sticky-top" style="top:20px;">
              <h1 class="h2">{{product.title}}</h1>
              <div class="d-flex justify-content-end align-items-end mb-3">
                <del class="text-muted">售價 ${{product.origin_price}}</del>
                <div class="h3 ml-auto mb-0 text-danger">
                  <small>特價 $</small>
                  <strong>{{product.price}}</strong>
                </div>
              </div>
              <div class="border-top pt-3 text-muted">
                <p>{{product.title}} {{qty}} {{product.unit}}</p>
                <p v-if="product.price >= 200">香脆薯條 {{qty}} {{product.unit}}</p>
                <p v-if="product.price > 100">$100 飲品或紅茶拿鐵(預設) {{qty}} 杯</p>
              </div>
            <div class="input-group">
              <select class="form-control mr-1" v-model="qty">
                <option value="0" selected disabled>請選擇數量</option>
                <option :value="num" v-for="num in 10" :key="num">
                  選購 {{num}} {{product.unit}}
                </option>
              </select>
              <a href="#" class="btn btn-main"
                @click.prevent="addtoCart(product.id, qty)">加入購物車</a>
              </div>
            </div>
          </div>
<!-- 右邊 -->
          <div class="col-md-12 col-lg-8">
            <div class="bg-cover-c border-radius-5" style="height: 600px;"
              :style="{backgroundImage: `url(${product.imageUrl})`}">
            </div>
          <div class="row justify-content-center mt-5">
            <div class="col-12 mb-3">
<!-- 餐點介紹 -->
              <h3 class="text-center font-weight-bold pb-2">餐點介紹</h3>
              <p style="line-height: 30px;">
                {{product.description}}
              </p>
            </div>
            <div class="col-12 col-md-10 col-lg-8 mb-3">
<!-- 主廚介紹 -->
            <h3 class="text-center font-weight-bold pb-2">主廚介紹</h3>
            <div class="bg-cover-t border-radius-5" style="height: 520px;background-image: url('https://images.unsplash.com/photo-1559575003-fb4ee38a747d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80');"></div>
            </div>
            <div class="col-12 mt-3">
              <h2 class="h5">餐點主廚：Kojiro Shinomiya</h2>
              <p style="line-height: 30px;">
                從日本知名廚藝學校畢業、曾榮獲法國烹飪界最高榮譽的普魯斯波爾勳章、三星米奇林最佳推薦廚師，
                有蔬菜料理魔術師之稱的主廚 Kojiro Shinomiya，餐點是由他精心設計出的菜單，
                烹飪部份交給主廚從廚藝學校嚴格篩選出的優秀廚師去操刀，
                使用的食材以及餐點水平主廚也是嚴格把關，讓您用餐開心也放心。
              </p>
            </div>
            <div class="col-12 mt-3 mb-3">
<!-- 常見問答 -->
              <h3 class="text-center font-weight-bold pb-2">常見問答</h3>
              <h5 style="line-height: 40px;">Ｑ：餐點飲料是自己加入購物車嗎？</h5>
              <p class="pb-2">Ａ：是的，如果忘記，會先預設為紅茶拿鐵，並在購買後將與您連絡做確認。</p>
              <h5 style="line-height: 40px;">Ｑ：配送日期和餐點的部份可以調整嗎？</h5>
              <p class="pb-2">Ａ：可以，購買後將與您連絡做確認，如果電話確認後須要做更改，可在前一天通知。</p>
              <h5 style="line-height: 40px;">Ｑ：對某些食材、香料過敏，或是餐點不符合個人口味，餐點可以做調整嗎？</h5>
              <p class="pb-2">Ａ：沒問題，購買後將與您連絡做確認，到時也請您詳細說明。</p>
              <h5 style="line-height: 40px;">Ｑ：我想問其他問題、想給些建議、想與我們合作。</h5>
              <p>Ａ：非常歡迎，請將您的說明 mail 至我們的信箱或是電話聯絡。</p>
              <p><i class="far fa-envelope"></i>：ggyy06059909@gmail.com</p>
              <p><i class="fas fa-headset"></i>：0932653357</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FloatCart from '../../components/FloatCart.vue';

export default {
  components: {
    FloatCart,
  },
  data() {
    return {
      qty: 0,
      productId: '',
    };
  },
  methods: {
    getProductMoreContent(productId) {
      this.$store.dispatch('getProductMoreContent', productId);
    },
    addtoCart(id, qty) {
      if (qty === 0) {
        this.$store.dispatch('updateMessage', { message: '請選擇數量', status: 'danger' });
        return;
      }
      this.$store.dispatch('addtoCart', { id, qty });
    },
    selectSwitch(category = '全部菜單') {
      this.$store.dispatch('selectSwitch', category);
      this.$router.push('/product_list');
    },
  },
  computed: {
    ...mapGetters(['product']),
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProductMoreContent(this.productId);
  },
};
</script>
