import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    select: '全部菜單',
    products: [],
    cart: {},
    cartLength: 0,
    messages: [],
    favoriteData: [],
    product: {},
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
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
    addtoCart(context, { id, qty = 1 }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(api, { data: cart }).then(() => {
        context.dispatch('getCart');
        context.dispatch('updateMessage', { message: '已加入購物車', status: 'success' });
      });
    },
    removeCartItem(context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/cart/${id}`;
      axios.delete(api).then(() => {
        context.dispatch('getCart');
        context.dispatch('updateMessage', { message: '已從購物車中刪除', status: 'danger' });
      });
    },
    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/cart`;
      axios.get(api).then((response) => {
        context.commit('CART', response.data.data);
        context.commit('CART_LENGTH', response.data.data.carts.length);
      });
    },
    updateMessage(context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      context.commit('UPDATE_MESSAGE', { message, status, timestamp });
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.commit('REMOVE_MESSAGE_WITH_TIMING', timestamp);
      }, 1500);
    },
    removeMessage(context, num) {
      context.commit('REMOVE_MESSAGE', num);
    },
    getFavoriteData(context) {
      context.commit('GET_FAVORITE_DATA');
    },
    addFavorite(context, item) {
      const favoriteItem = {
        id: item.id,
        title: item.title,
        is_enabled: item.is_enabled,
      };
      context.commit('ADD_FAVORITE_DATA', favoriteItem);
      context.commit('GET_FAVORITE_DATA');
      context.dispatch('updateMessage', { message: '已加入我的最愛', status: 'success' });
    },
    removeFavorite(context, item) {
      context.commit('REMOVE_FAVORITE', item);
      context.commit('GET_FAVORITE_DATA');
      context.dispatch('updateMessage', { message: '已從我的最愛中刪除', status: 'danger' });
    },
    removeAllFavorite(context) {
      context.commit('REMOVE_ALL_FAVORITE');
      context.commit('GET_FAVORITE_DATA');
      context.dispatch('updateMessage', { message: '全部已刪除', status: 'danger' });
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
    LOADING(state, status) {
      state.isLoading = status;
    },
    GIT_PROSUCTS_DATA(state, payload) {
      state.products = payload;
    },
    CART(state, payload) {
      state.cart = payload;
    },
    CART_LENGTH(state, payload) {
      state.cartLength = payload;
    },
    UPDATE_MESSAGE(state, payload) {
      state.messages.push(payload);
    },
    REMOVE_MESSAGE_WITH_TIMING(state, payload) {
      state.messages.forEach((item, i) => {
        if (item.timestamp === payload) {
          state.messages.splice(i, 1);
        }
      });
    },
    REMOVE_MESSAGE(state, payload) {
      state.messages.splice(payload, 1);
    },
    GET_FAVORITE_DATA(state) {
      state.favoriteData = JSON.parse(localStorage.getItem('favoriteData')) || [];
    },
    ADD_FAVORITE_DATA(state, payload) {
      state.favoriteData.push(payload);
      localStorage.setItem('favoriteData', JSON.stringify(state.favoriteData));
    },
    REMOVE_FAVORITE(state, payload) {
      const num = state.favoriteData.findIndex((el) => {
        const result = el.id === payload.id;
        return result;
      });
      state.favoriteData.splice(num, 1);
      localStorage.setItem('favoriteData', JSON.stringify(state.favoriteData));
    },
    REMOVE_ALL_FAVORITE(state) {
      state.favoriteData = [];
      localStorage.setItem('favoriteData', JSON.stringify(state.favoriteData));
    },
    GET_PRODUCT_MORE_CONTENT(state, payload) {
      state.product = payload;
    },
    SELECT_SWITCH(state, payload) {
      state.select = payload;
    },
  },
  getters: {
    filteredData(state) {
      return state.products;
    },
    select(state) {
      return state.select;
    },
    favoriteData(state) {
      return state.favoriteData;
    },
    product(state) {
      return state.product;
    },
    cart(state) {
      return state.cart;
    },
    isLoading(state) {
      return state.isLoading;
    },
    products(state) {
      return state.products;
    },
  },
});
