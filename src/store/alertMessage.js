export default {
  state: {
    messages: [],
  },
  actions: {
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
  },
  mutations: {
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
  },
  getters: {
    messages(state) {
      return state.messages;
    },
  },
};
