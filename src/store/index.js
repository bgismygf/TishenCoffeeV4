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
      context.commit('SELECT', status);
      context.dispatch('getProducts');
    },
    getProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/products/all`;
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        context.commit('LOADING', false);
        context.commit('FILTEREDDATA', response.data.products);
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
        // vm.$bus.$emit('removeCartItem');
        context.dispatch('updateMessage', { message: '已從購物車中刪除', status: 'danger' });
      });
    },
    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/cart`;
      axios.get(api).then((response) => {
        context.commit('CART', response.data.data);
        context.commit('CARTLENGTH', response.data.data.carts.length);
        // vm.$bus.$emit('toFloatCart');
      });
    },
    updateMessage(context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      context.commit('UPDATEMESSAGE', { message, status, timestamp });
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.commit('REMOVEMESSAGEWITHTIMING', timestamp);
      }, 1500);
    },
    removeMessage(context, num) {
      context.commit('REMOVEMESSAGE', num);
    },
    getFavoriteData(context) {
      context.commit('GETFAVORITEDATA');
    },
    addFavorite(context, item) {
      const favoriteItem = {
        id: item.id,
        title: item.title,
        is_enabled: item.is_enabled,
      };
      context.commit('ADDFAVORITEDATA', favoriteItem);
      context.commit('GETFAVORITEDATA');
      context.dispatch('updateMessage', { message: '已加入我的最愛', status: 'success' });
    },
    removeFavorite(context, item) {
      context.commit('REMOVEFAVORITE', item);
      context.commit('GETFAVORITEDATA');
      context.dispatch('updateMessage', { message: '已從我的最愛中刪除', status: 'danger' });
    },
    removeAllFavorite(context) {
      context.commit('REMOVEALLFAVORITE');
      context.commit('GETFAVORITEDATA');
      context.dispatch('updateMessage', { message: '全部已刪除', status: 'danger' });
    },
    getProductMoreContent(context, Id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_ZACPATH}/product/${Id}`;
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        context.commit('LOADING', false);
        context.commit('GETPRODUCTMORECONTENT', response.data.product);
      });
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    SELECT(state, payload) {
      state.select = payload;
    },
    FILTEREDDATA(state, payload) {
      if (state.select === '全部菜單') {
        state.products = payload;
      } else {
        state.products = payload.filter((item) => item.category === state.select);
      }
    },
    CART(state, payload) {
      state.cart = payload;
    },
    CARTLENGTH(state, payload) {
      state.cartLength = payload;
    },
    UPDATEMESSAGE(state, payload) {
      state.messages.push(payload);
    },
    REMOVEMESSAGEWITHTIMING(state, payload) {
      state.messages.forEach((item, i) => {
        if (item.timestamp === payload) {
          state.messages.splice(i, 1);
        }
      });
    },
    REMOVEMESSAGE(state, payload) {
      state.messages.splice(payload, 1);
    },
    GETFAVORITEDATA(state) {
      state.favoriteData = JSON.parse(localStorage.getItem('favoriteData')) || [];
    },
    ADDFAVORITEDATA(state, payload) {
      state.favoriteData.push(payload);
      localStorage.setItem('favoriteData', JSON.stringify(state.favoriteData));
    },
    REMOVEFAVORITE(state, payload) {
      const num = state.favoriteData.findIndex((el) => {
        const result = el.id === payload.id;
        return result;
      });
      state.favoriteData.splice(num, 1);
      localStorage.setItem('favoriteData', JSON.stringify(state.favoriteData));
    },
    REMOVEALLFAVORITE(state) {
      state.favoriteData = [];
      localStorage.setItem('favoriteData', JSON.stringify(state.favoriteData));
    },
    GETPRODUCTMORECONTENT(state, payload) {
      state.product = payload;
    },
  },
});
