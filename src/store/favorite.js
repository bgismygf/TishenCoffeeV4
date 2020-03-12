export default {
  state: {
    favoriteData: [],
  },
  actions: {
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
  },
  mutations: {
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
  },
  getters: {
    favoriteData(state) {
      return state.favoriteData;
    },
  },
};
