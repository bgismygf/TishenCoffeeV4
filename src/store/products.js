import axios from 'axios';

export default {
  state: {
    select: '全部菜單',
    products: [],
    product: {},
  },
  actions: {
    getItem(context, status) {
      context.commit('SELECT_SWITCH', status);
    },
    getProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/products/all`;
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        context.commit('LOADING', false);
        context.commit('GIT_PROSUCTS_DATA', response.data.products);
      });
    },
    getProductMoreContent(context, Id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/product/${Id}`;
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        context.commit('LOADING', false);
        context.commit('GET_PRODUCT_MORE_CONTENT', response.data.product);
      });
    },
    selectSwitch(context, category) {
      context.commit('SELECT_SWITCH', category);
    },
  },
  mutations: {
    GIT_PROSUCTS_DATA(state, payload) {
      state.products = payload;
    },
    GET_PRODUCT_MORE_CONTENT(state, payload) {
      state.product = payload;
    },
    SELECT_SWITCH(state, payload) {
      state.select = payload;
    },
  },
  getters: {
    select(state) {
      return state.select;
    },
    product(state) {
      return state.product;
    },
    products(state) {
      return state.products;
    },
  },
};
