<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="text-right">
            <button class="btn btn-main mt-0 mt-md-5"
                    @click="openModal(true)">
                建立新的優惠卷
            </button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th class="text-left">名稱</th>
                    <th class="text-left d-none d-md-table-cell">折扣百分比</th>
                    <th class="d-none d-sm-table-cell">到期日</th>
                    <th class="d-none d-md-table-cell" width="120">是否啟用</th>
                    <th class="" width="145">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in coupons" :key="item.id">
                    <td class="text-left">{{ item.title }}</td>
                    <td class="d-none d-md-table-cell">{{ item.percent }} %</td>
                    <td class="d-none d-sm-table-cell">{{ item.due_date }}</td>
                    <td class="d-none d-md-table-cell">
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else class="text-danger">未啟用</span>
                    </td>
                    <td class="text-center">
                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                            <button class="btn btn-outline-primary"
                            @click="openModal(false, item)">編輯</button>
                            <button class="btn btn-outline-danger"
                            @click="opendelCouponModal(item)">刪除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <Pagination :pages="pagination" @emitPages="getCouponData"></Pagination>
<!-- 新增、修改 modal -->
        <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>折價卷</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                        <label for="title">標題</label>
                        <input type="text" id="title" class="form-control" placeholder="請輸入標題"
                        v-model="tempCoupon.title">
                        </div>
                        <div class="form-group">
                        <label for="code">優惠碼</label>
                        <input type="text" id="code" class="form-control" placeholder="請輸入優惠碼"
                        v-model="tempCoupon.code">
                        </div>
                        <div class="form-group">
                        <label for="due_date">到期日</label>
                        <input type="date" id="due_date" class="form-control" placeholder="請輸入到期日"
                        v-model="tempCoupon.due_date">
                        </div>
                        <div class="form-group">
                        <label for="percent">打折百分比</label>
                        <input type="number" id="percent" class="form-control"
                               placeholder="請輸入打折百分比"
                               v-model="tempCoupon.percent">
                        </div>
                        <div class="form-group">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="is_enabled"
                            :true-value="1" :false-value="0" v-model="tempCoupon.is_enabled">
                            <label class="form-check-label" for="is_enabled">是否啟用</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary"
                            data-dismiss="modal">
                            取消
                        </button>
                        <button type="button" class="btn btn-primary"
                            @click="updateCoupon">
                            確認
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- 刪除 modal-->
        <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                    <span>刪除優惠卷</span>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠卷(刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary"
                        data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger"
                    @click="delCoupon">確認刪除</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '../../components/Pagination';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      coupons: {},
      pagination: {},
      tempCoupon: {},
      isLoading: false,
      isNew: false,
    };
  },
  methods: {
    getCouponData(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {};
        this.isNew = true;
        $('#couponModal').modal('show');
      } else {
        this.tempCoupon = Object.assign({}, item);
        this.isNew = false;
        $('#couponModal').modal('show');
      }
    },
    updateCoupon() {
      const vm = this;
      let httpMethod = 'post';
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/admin/coupon`;
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        if (response.data.success) {
          $('#couponModal').modal('hide');
          vm.getCouponData();
          vm.$bus.$emit('message:push', response.data.message, 'success');
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger');
        }
      });
    },
    opendelCouponModal(item) {
      this.tempCoupon = Object.assign({}, item);
      $('#delCouponModal').modal('show');
    },
    delCoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/admin/coupon/${vm.tempCoupon.id}`;
      vm.$http.delete(api, { data: vm.tempCoupon }).then((response) => {
        if (response.data.success) {
          $('#delCouponModal').modal('hide');
          vm.getCouponData();
          vm.$bus.$emit('message:push', response.data.message, 'danger');
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger');
        }
      });
    },
  },
  created() {
    this.getCouponData();
  },
};
</script>
