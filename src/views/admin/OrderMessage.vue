<template>
  <div>
      <table class="table mt-5">
        <thead>
          <tr>
              <th>購買時間</th>
              <th class="d-none d-sm-table-cell">訂購人資料</th>
              <th class="d-none d-lg-table-cell">購買款項</th>
              <th class="text-center">應付金額</th>
              <th class="text-center d-none d-md-table-cell">是否付款</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{ item.create_at | date }}</td>
            <td class="d-none d-sm-table-cell">
              <ul class="list-unstyled">
                  <li v-if="item.user">
                      姓名: {{ item.user.name }}
                  </li>
                  <li v-if="item.user">
                      電話: {{ item.user.tel }}
                  </li>
                  <li v-if="item.user">
                      Email: {{ item.user.email }}
                  </li>
                  <li v-if="item.user">
                      地址: {{ item.user.address }}
                  </li>
                  <li v-if="item.message">
                      留言: {{ item.message }}
                  </li>
              </ul>
            </td>
            <td class="d-none d-lg-table-cell">
              <ul class="list-unstyled">
                <li v-for="(product, id) in item.products" :key="id">
                    {{product.product.title}}: {{product.qty}}
                    {{product.product.unit}}
                </li>
              </ul>
            </td>
            <td class="text-right"
              :class="{'text-success': item.is_paid,'text-danger': !item.is_paid,}">
              {{ item.total | currency }}
            </td>
            <td class="text-center d-none d-md-table-cell">
              <span class="text-success" v-if="item.is_paid">已付款</span>
              <span class="text-danger" v-else>未付款</span>
            </td>
          </tr>
        </tbody>
      </table>
<!-- 分頁扭 -->
      <Pagination :pages="pagination" @emitPages="getOrder"></Pagination>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      orders: {
        user: {},
      },
      pagination: {},
    };
  },
  methods: {
    getOrder(page = 1) {
      const vm = this;
      let dataOrder = {};
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/admin/orders?page=${page}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        dataOrder = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.orders = JSON.parse(JSON.stringify(dataOrder));
      });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
