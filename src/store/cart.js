import axios from 'axios';

export default {
  state: {
    cart: {},
    cartLength: 0,
  },
  actions: {
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
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    },
    CART_LENGTH(state, payload) {
      state.cartLength = payload;
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    cartLength(state) {
      return state.cartLength;
    },
  },
};
