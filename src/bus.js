import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// Message
// vm.$bus.$emit('message:push', message, status);

// 自定義名稱 'messsage:push'
// message(String): 訊息內容
// status(String): Alert 的樣式
