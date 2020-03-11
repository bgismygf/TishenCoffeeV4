<template>
  <div>
    <div class="container content-h">
      <div class="row justify-content-center text-center mt-5 mb-3">
        <div class="col-lg-3" v-if="!orderData.is_paid">
          <h6 class="border-radius-5 border-2px py-2 px-3 text-white"
            :class="{'bg-main': step >= 1}">
            1.確認購物清單
            <i class="fas fa-check-circle" v-if="step >= 2"></i>
            <i class="far fa-circle" v-else></i>
          </h6>
        </div>
        <div class="col-lg-3" v-if="!orderData.is_paid">
          <h6 class="border-radius-5 border-2px py-2 px-3 border-main"
            :class="{'bg-main': step >= 2,'text-white': step >= 2}">
            2.填寫訂購資料
            <i class="fas fa-check-circle" v-if="step >= 3"></i>
            <i class="far fa-circle" v-else></i>
          </h6>
        </div>
        <div class="col-lg-3" v-if="!orderData.is_paid">
          <h6 class="border-radius-5 border-2px py-2 px-3 border-main"
            :class="{'bg-main': step >= 3,'text-white': step >= 3}">
            3.付款 & 完成
            <!-- <i class="fas fa-check-circle" v-if="orderData.is_paid"></i>
            <i class="far fa-circle" v-else></i> -->
            <i class="far fa-circle"></i>
          </h6>
        </div>
        <div class="col-md-9">
          <h4 class="border-radius-5 border-2px py-3 px-3 border-main bg-main text-white"
            :class="{'bg-main': step >= 3,'text-white': step >= 3}" v-if="orderData.is_paid">
            付款成功
            <i class="fas fa-check-circle"></i>
          </h4>
        </div>
      </div>
<!-- step 1 -->
      <div class="row justify-content-center" v-if="step === 1">
        <div class="col-lg-9">
          <div class="table-responsive">
            <table class="table mt-3 mb-4 table-td">
              <thead>
                <tr>
                  <th scope="col" class="d-none d-md-table-cell text-center">縮圖</th>
                  <th scope="col">品名</th>
                  <th scope="col" class="d-sm-table-cell text-center">數量</th>
                  <th scope="col" class="text-center">價格</th>
                  <th scope="col" class="text-center">取消</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td class="d-none d-md-table-cell">
                    <div class="table-img bg-cover-c border-radius-10"
                        :style="{backgroundImage: `url(${item.product.imageUrl})`}">
                    </div>
                  </td>
                  <td>
                    <div>{{ item.product.title }}</div>
                    <div v-if="item.coupon"
                      class="text-success mt-2">已套用折價卷
                    </div>
                  </td>
                  <td class="d-sm-table-cell text-center">
                    <a href="#" class="mr-2 text-main"
                      @click.prevent="CartAdjNum(item, false)">
                      <i class="fas fa-minus"></i>
                    </a>
                    {{ item.qty }}
                    <a href="#" class="ml-2 text-main"
                      @click.prevent="CartAdjNum(item, true)">
                      <i class="fas fa-plus"></i>
                    </a>
                  </td>
                  <td class="text-right">
                    <div v-if="!item.coupon">$ {{ item.total }}</div>
                    <del v-if="item.coupon">$ {{ item.total }}</del>
                    <div v-if="item.coupon" class="text-success mt-2">
                      $ {{ item.final_total }}
                    </div>
                  </td>
                  <td class="text-center">
                    <a class="text-danger" @click.prevent="removeCartItem(item.id)" href="#">
                        <i class="fas fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot class="bg-light table-tfoot">
                <tr>
                  <td class="d-none d-md-table-cell"></td>
                  <td class="d-sm-table-cell"></td>
                  <td class="text-right" v-if="cart.carts"
                    >共 {{cart.carts.length}} 件</td>
                  <td class="text-right">總計</td>
                  <td class="text-right">$ {{ cart.total }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <td class="d-none d-md-table-cell"></td>
                  <td class="d-none d-sm-table-cell"></td>
                  <td class="text-right text-success" colspan="2">折扣後金額</td>
                  <td class="text-right text-success">$ {{ cart.final_total }}</td>
                </tr>
              </tfoot>
              </table>
                <div class="input-group mb-4">
                  <input type="text" class="form-control"
                    placeholder="請輸入折價卷代碼"
                    aria-label="請輸入折價卷代碼"
                    aria-describedby="button-addon2"
                    v-model="coupon_code">
                <div class="input-group-append">
                  <button class="btn btn-main"
                    type="button"
                    id="button-addon2"
                    @click="addCouponCode">套用折價卷
                  </button>
                </div>
              </div>
              <div class="d-flex justify-content-between mb-4">
                <router-link to="/product_list" class="btn btn-main">
                  <i class="fas fa-arrow-left"></i>
                  繼續購買
                </router-link>
                <a href="#" class="btn btn-danger" v-if="cart.total !== 0"
                  @click.prevent="stepAfter(2)">
                  填寫訂購資料
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
<!-- step 2 -->
        <div class="row justify-content-center mb-4" v-if="step === 2">
          <div class="col-lg-9">
            <div class="accordion" id="accordionExample">
              <div class="text-center justify-content-center d-flex" id="headingOne">
                <a href="#" class="text-main d-flex flex-column w-25"
                  @click.prevent="listSwitchValue = !listSwitchValue">
                  <template v-if="listSwitchValue === false">
                    <span>顯示購物清單</span>
                    <span>
                      <i class="fas fa-caret-down"></i>
                    </span>
                  </template>

                  <template v-if="listSwitchValue === true">
                    <span>關閉購物清單</span>
                    <span>
                      <i class="fas fa-caret-up"></i>
                    </span>
                  </template>
                </a>
              </div>
              <div class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample"
                :class="{'show' : listSwitchValue === true }">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">品名</th>
                      <th scope="col" width="25%">數量</th>
                      <th scope="col" width="15%">價格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>{{item.product.title}}</td>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-right">
                      <div v-if="!item.coupon">$ {{ item.total }}</div>
                      <div v-if="item.coupon">$ {{ item.final_total }}</div>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <td></td>
                  <td>總計</td>
                  <td class="text-right">
                    <div v-if="cart.final_total !== cart.total">$ {{ cart.final_total }}</div>
                    <div v-else>$ {{ cart.total }}</div>
                  </td>
                </tfoot>
              </table>
            </div>
          </div>
          <form>
            <h5 class="text-center text-white mb-3 bg-main py-2 border-radius-5">訂購資料</h5>
            <div class="form-row">
              <div class="form-group col-12">
                <label for="email">Email (*)</label>
                <input type="email" class="form-control" id="email" name="email"
                  placeholder="請輸入 Email"
                  v-model="form.user.email"
                  v-validate="'required|email'"
                  :class="{'is-invalid': errors.first('email')}">
                <span class="text-danger" v-if="errors.has('email')">
                    {{errors.first('email')}}
                </span>
              </div>
            </div>
            <div class="form-group">
              <label for="name">姓名 (*)</label>
              <input type="text" class="form-control" id="name" name="name" placeholder="請輸入您的姓名"
                v-model="form.user.name" v-validate="'required'"
                :class="{'is-invalid': errors.first('name')}">
              <span class="text-danger" v-if="errors.has('name')">
                請輸入您的姓名
              </span>
            </div>
            <div class="form-group">
              <label for="tel">電話 (*)</label>
              <input type="text" class="form-control" id="tel" name="tel" placeholder="請輸入您的電話"
                v-model="form.user.tel" v-validate="'required'"
                :class="{'is-invalid': errors.first('tel')}">
              <span class="text-danger" v-if="errors.has('tel')">
                請輸入您的電話
              </span>
            </div>
            <div class="form-group">
              <label for="address">地址 (*)</label>
              <input type="text" class="form-control" id="address" name="address"
                placeholder="請輸入您的地址"
                v-model="form.user.address"
                v-validate="'required'"
                :class="{'is-invalid': errors.first('address')}">
              <span class="text-danger" v-if="errors.has('address')">
                請輸入您的地址
              </span>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">留言</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                v-model="form.message">
              </textarea>
            </div>
            <div class="d-flex justify-content-between">
              <a href="#" class="btn btn-main" @click.prevent="stepAfter(1)">
                <i class="fas fa-arrow-left"></i>
                  回上一步
              </a>
              <a href="#" class="btn btn-danger" v-if="cart.total !== 0"
                @click.prevent="createOrder">
                確認訂購
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
<!-- step 3 -->
      <div v-if="step === 3">
        <div class="row justify-content-center mb-4">
          <div class="col-lg-9">
            <table class="table mb-3">
              <tr>
                <th width="150">您的 Email：</th>
                <td v-if="orderData.user">{{orderData.user.email}}</td>
              </tr>
              <tr>
                <th width="150">您的姓名：</th>
                <td v-if="orderData.user">{{orderData.user.name}}</td>
              </tr>
              <tr>
                <th width="150">您的電話：</th>
                <td v-if="orderData.user">{{orderData.user.tel}}</td>
              </tr>
              <tr>
                <th width="150">您的地址：</th>
                <td v-if="orderData.user">{{orderData.user.address}}</td>
              </tr>
              <tr>
                <th v-if="orderData.message" width="150">您的留言：</th>
                <td v-if="orderData.message">{{orderData.message}}</td>
              </tr>
              <tr>
                <th width="150">付款狀態</th>
                <td v-if="!orderData.is_paid">尚未付款</td>
                <td v-else class="text-danger">付款成功，感謝您的訂購，我們將盡快與您聯絡。</td>
              </tr>
            </table>
            <div v-if="!orderData.is_paid" class="text-right">
                <a href="#" class="btn btn-danger" @click.prevent="payOrder()">確認付款</a>
            </div>
            <div v-if="orderData.is_paid" class="text-right">
              <router-link to="/product_list" class="btn btn-main">
                繼續逛逛
                <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      orderId: '',
      coupon_code: '',
      listSwitchValue: false,
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      orderData: {},
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch('getCart');
    },
    removeCartItem(id) {
      this.$store.dispatch('removeCartItem', id);
    },
    CartAdjNum(item, boolean) {
      const vm = this;
      const cart = {
        product_id: item.product.id,
        qty: 0,
      };
      if (boolean) {
        cart.qty = item.qty + 1;
      } else {
        if (item.qty - 1 === 0) {
          return;
        }
        cart.qty = item.qty - 1;
      }
      const deleteApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/cart/${item.id}`;
      const addApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/cart`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.post(addApi, { data: cart });
      vm.$http.delete(deleteApi).then((response) => {
        if (response.data.success) {
          vm.getCart();
          vm.$store.dispatch('updateMessage', { message: '數量以更改', status: 'success' });
          vm.$store.dispatch('updateLoading', false);
        }
      });
    },
    stepAfter(num) {
      this.step = num;
      window.scrollTo(0, 0);
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.$http.post(api, { data: coupon }).then((response) => {
        if (response.data.success) {
          vm.coupon_code = '';
          vm.getCart();
          vm.$store.dispatch('updateMessage', { message: response.data.message, status: 'success' });
        } else {
          vm.$store.dispatch('updateMessage', { message: response.data.message, status: 'danger' });
        }
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/order`;
      const order = vm.form;
      vm.$validator.validate().then((valid) => {
        if (valid) {
          vm.$http.post(api, { data: order }).then((response) => {
            vm.step = 3;
            window.scrollTo(0, 0);
            vm.orderId = response.data.orderId;
            vm.getOrder(vm.orderId);
          });
        } else {
          vm.$store.dispatch('updateMessage', { message: '請確認資料是否完整', status: 'danger' });
        }
      });
    },
    getOrder(id) {
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/order/${id}`;
      vm.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        vm.orderData = response.data.order;
      });
    },
    payOrder() {
      const vm = this;
      const id = vm.orderId;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/pay/${id}`;
      vm.$http.post(api).then(() => {
        vm.getOrder(id);
        vm.$store.dispatch('getCart');
      });
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
.content-h {
  min-height: calc(100vh - 348px);
}
</style>
